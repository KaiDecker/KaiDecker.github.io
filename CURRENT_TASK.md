# Current Task

## Objective

整理个人主页的分享元数据、时效信息、联系方式、移动端交互和维护验证，并将第一篇文章的文件日期改为 2026-08-21。

## Acceptance Criteria

- 首页分享标题使用完整站点标题。
- 公开联系方式只保留校园邮箱。
- 学业与项目页面说明数据更新时间，项目显示状态。
- 移动导航和主题按钮向辅助技术同步当前状态。
- 第一篇文章文件名与 front matter 日期一致，永久链接不变。
- Jekyll 构建和站内链接检查通过。

## Status

Completed on 2026-09-04.

## Validation

- `bundle exec jekyll build --strict_front_matter --trace`
- `node --check assets/js/main.js`
- `python scripts/check_internal_links.py _site`
- `git diff --check`
- HTTP 200 checks for `/`, `/projects/`, `/coursework/`, `/about/`, and the renamed article URL
