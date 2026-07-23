# 咸蛋超人迪卡 / KaiDecker

个人网站与长期维护的数字花园，使用 Jekyll 构建并部署到 GitHub Pages。

网站内容围绕：

- 北京林业大学统计学本科（预计 2028 毕业）
- Agent、后端、机器学习与测试开发
- 计算机 408、CS61A、CS61B、CS50 学习记录
- 数学建模、数据分析与公开项目
- 游戏、吉他与其他个人写作

## 页面

- `/`：首页
- `/projects/`：项目归档
- `/coursework/`：精选课程与学业概览
- `/writing/`：文章归档
- `/about/`：个人介绍

## 常用修改

### 更新个人信息

主要内容位于：

- `_config.yml`
- `index.html`
- `about.md`
- `_includes/header.html`
- `_includes/footer.html`

联系邮箱位于 `_config.yml` 的 `author.email` 与 `author.emails`。默认使用北京林业大学校园邮箱作为主邮箱，并保留 QQ 邮箱作为备用联系方式。

Gmail 地址目前没有加入，因为你提供的 `a2280203395@gmail` 缺少完整域名；确认后再补最稳妥。

### 更新项目

编辑 `_data/projects.yml`。首页读取 `featured: true` 的项目，项目页展示全部项目。

每个项目支持中英文简介：

```yaml
description: 中文简介
description_en: English description
```

### 写文章

1. 复制 `_drafts/post-template.md`
2. 将文件放入 `_posts/`
3. 文件名改为 `YYYY-MM-DD-title.md`
4. 更新 front matter 与正文

## 本地预览

```bash
bundle install
bundle exec jekyll serve
```

打开 `http://localhost:4000`。

## 部署

GitHub 仓库进入：

`Settings → Pages → Deploy from a branch → main → /(root)`

首次提交建议：

```bash
git add .
git commit -m "feat: build personal website"
git push origin main
```
