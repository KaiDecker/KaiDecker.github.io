# KaiDecker.github.io

Kai 的个人网站与数字花园，使用 Jekyll 构建并部署到 GitHub Pages。

## 页面

- `/`：首页
- `/projects/`：项目归档
- `/writing/`：文章归档
- `/about/`：个人介绍

## 修改内容

### 更新项目

编辑 `_data/projects.yml`。首页会自动读取 `featured: true` 的项目，项目页会展示全部项目。

### 写文章

1. 复制 `_drafts/post-template.md`
2. 将文件放到 `_posts/`
3. 文件名改为 `YYYY-MM-DD-title.md`
4. 更新 front matter 和正文

### 修改个人信息

主要内容位于：

- `_config.yml`
- `index.html`
- `about.md`
- `_includes/footer.html`

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
git commit -m "feat: build initial personal website"
git push origin main
```
