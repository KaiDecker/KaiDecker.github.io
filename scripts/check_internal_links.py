#!/usr/bin/env python3
"""Validate local links and fragments in a generated static site."""

from __future__ import annotations

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


IGNORED_SCHEMES = {"data", "javascript", "mailto", "tel"}


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.targets: set[str] = set()
        self.references: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        element_id = values.get("id")
        if element_id:
            self.targets.add(element_id)

        if tag == "a" and values.get("name"):
            self.targets.add(values["name"] or "")

        for attribute in ("href", "src"):
            value = values.get(attribute)
            if value:
                self.references.append((attribute, value))


def parse_page(path: Path) -> PageParser:
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def resolve_target(site_root: Path, source: Path, url_path: str) -> Path:
    decoded_path = unquote(url_path)
    if decoded_path.startswith("/"):
        candidate = site_root / decoded_path.lstrip("/")
    else:
        candidate = source.parent / decoded_path

    if decoded_path.endswith("/"):
        return candidate / "index.html"
    if candidate.is_dir():
        return candidate / "index.html"
    if candidate.exists():
        return candidate
    if not candidate.suffix:
        html_candidate = candidate.with_suffix(".html")
        if html_candidate.exists():
            return html_candidate
        return candidate / "index.html"
    return candidate


def validate(site_root: Path) -> list[str]:
    html_files = sorted(site_root.rglob("*.html"))
    parsed_pages = {path.resolve(): parse_page(path) for path in html_files}
    errors: list[str] = []

    for source, page in parsed_pages.items():
        for attribute, reference in page.references:
            parsed_url = urlsplit(reference)
            if parsed_url.scheme in IGNORED_SCHEMES or parsed_url.scheme or parsed_url.netloc:
                continue

            target = resolve_target(site_root.resolve(), source, parsed_url.path or source.name).resolve()
            try:
                target.relative_to(site_root.resolve())
            except ValueError:
                errors.append(f"{source}: {attribute} escapes site root: {reference}")
                continue

            if not target.exists():
                errors.append(f"{source}: missing {attribute} target: {reference}")
                continue

            if parsed_url.fragment and target.suffix.lower() == ".html":
                target_page = parsed_pages.get(target)
                fragment = unquote(parsed_url.fragment)
                if target_page is not None and fragment not in target_page.targets:
                    errors.append(f"{source}: missing fragment #{fragment} in {reference}")

    return errors


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("site_root", nargs="?", default="_site", type=Path)
    args = parser.parse_args()

    if not args.site_root.is_dir():
        parser.error(f"site directory does not exist: {args.site_root}")

    errors = validate(args.site_root)
    if errors:
        print("Internal link check failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Internal link check passed for {args.site_root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
