# Project State

## Purpose

KaiDecker 的 Jekyll 个人主页，用于记录个人近况、项目、文章、课程和兴趣，并部署到 GitHub Pages。

## Current State

- 站点以中文为主，保留必要的英文摘要。
- 个人资料集中在 `_config.yml`。
- 项目列表由 `_data/projects.yml` 驱动，详细复盘位于 `projects/`。
- 文章位于 `_posts/`，永久链接使用 `/posts/` 路径。
- 使用本地源码版 jekyll-theme-8bit；桌面左侧为个人资料和导航，右侧按 About、Posts、Projects、Course 排列。
- 使用浅色像素主题，中文固定使用 Fusion Pixel；移动端折叠为单列，导航保持可见。
- 文章默认支持本地 MathJax 数学公式，行内和独立公式均采用 Kramdown 双美元语法；公式字体独立于像素正文。
- 字体和 NES.css 均本地加载；主题来源见 THEME-NOTES.md。
- GitHub Actions 负责验证 Jekyll 构建和站内链接。

## Maintenance Rules

- 只公开校园邮箱 `reunited9130@bjfu.edu.cn`。
- 项目状态使用可验证、不过度承诺的描述，具体开发状态以仓库为准。

## Status

2026-10-10：将 Undertale 版本备份到项目外，切换为 jekyll-theme-8bit 并适配原有文章和个人内容，接入本地数学公式渲染。按文件职责分组提交，尚未推送。
