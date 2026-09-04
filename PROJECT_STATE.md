# Project State

## Purpose

KaiDecker 的 Jekyll 个人主页，用于公开项目、课程、文章与个人经历，并部署到 GitHub Pages。

## Current State

- 站点以中文为主，保留必要的英文摘要。
- 个人资料和学业摘要集中在 `_config.yml`。
- 项目列表由 `_data/projects.yml` 驱动，详细复盘位于 `projects/`。
- 文章位于 `_posts/`，永久链接由 front matter 日期和标题生成。
- 支持浅色/深色主题和响应式导航。
- GitHub Actions 负责验证 Jekyll 构建和站内链接。

## Maintenance Rules

- 更新成绩或项目归档时，同步更新 `_config.yml` 中的 `content_dates`。
- 只公开校园邮箱 `reunited9130@bjfu.edu.cn`。
- 项目状态使用可验证、不过度承诺的描述，具体开发状态以仓库为准。

## Status

2026-09-04：完成站点元数据、内容时效、项目状态、联系方式、导航无障碍和自动验证整理。
