# KaiDecker

个人网站，使用 Jekyll 构建并部署到 GitHub Pages。

网站记录个人近况、文章、项目、课程和兴趣。

## 主题

使用 `julianolf/jekyll-theme-8bit` 的本地源码版本，保留原主题的 NES.css 像素边框、蓝色资料卡和字体，并针对中文内容及移动端调整布局。无需额外安装主题 gem 或配置远程主题。

- `assets/css/style.scss`：样式入口，先导入原主题，再导入本站调整。
- `_sass/jekyll-theme-8bit.scss`、`_sass/fonts.scss`、`_sass/rouge-github.scss`：原主题源码。
- `_sass/site-8bit.scss`：本站布局、中文排版和响应式调整。
- `assets/css/vendor/nes.min.css`：NES.css 2.3.0，本地加载。
- `THEME-NOTES.md`：上游版本、字体来源和许可说明。

中文固定使用 Fusion Pixel 像素字体，字体文件和许可均保存在本地。数学公式由 MathJax 使用独立的数学字形排版。

## 页面

- `/`：首页
- `/projects/`：项目归档
- `/coursework/`：课程记录
- `/posts/`：文章归档
- `/about/`：个人介绍

## 常用修改

### 更新个人信息

主要内容位于：

- `_config.yml`
- `index.html`
- `about.md`
- `_includes/header.html`
- `_includes/footer.html`

公开联系邮箱位于 `_config.yml` 的 `author.email`。

### 更新项目

编辑 `_data/projects.yml`。首页由 `index.html` 中的 `featured_anchors` 选择 Exagium、OPEN SHIFT、Hermes Agent #82357，项目页展示全部项目。

每个项目支持中英文简介和公开状态：

```yaml
description: 中文简介
description_en: English description
status: 持续迭代
```

### 写文章

1. 复制 `_drafts/post-template.md`
2. 将文件放入 `_posts/`
3. 文件名改为 `YYYY-MM-DD-title.md`
4. 更新 front matter 与正文

在 front matter 添加 `pinned: true` 可将文章置顶于首页和 Posts 列表。置顶文章之间、普通文章之间仍按日期倒序排列，首页共显示三篇文章。删除该字段或改为 `pinned: false` 即可取消置顶。

### 数学公式

`layout: post` 的文章自动加载本地 MathJax 3.2.2。普通页面需要在 front matter 添加 `math: true`；文章可用 `math: false` 关闭。

本站使用 Kramdown 的原生数学语法：**行内和独立公式都用双美元符号**，不要用单美元符号，金额 `$5` 不会被误识别。

```markdown
行内公式：$$E = mc^2$$。

独立公式前后各留一个空行：

$$
\int_0^1 x^2\,dx = \frac{1}{3}
$$

$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
$$
```

支持常用 TeX 数学及 AMS 命令，例如分数、积分、矩阵、`cases`、`aligned`、`\mathbb`。不支持任意 LaTeX 文档或宏包；动态扩展加载已禁用，避免依赖外部网络。代码块和行内代码不会被渲染。手机上的长公式可横向滚动。

`_drafts/math-preview.md` 是公式示例草稿，常规构建不会发布。使用 `bundle exec jekyll serve --drafts` 可在 `/math-preview/` 查看。

## 本地预览

```bash
bundle install
bundle exec jekyll serve
```

打开 `http://localhost:4000`。

## 维护与检查

文章放在 `_posts/`，模板和公式示例放在 `_drafts/`；页面布局位于 `_layouts/`，导航和页脚位于 `_includes/`。项目数据使用 `_data/projects.yml`，站点及作者信息使用 `_config.yml`。

公开联系方式使用校园邮箱。项目状态和描述以实际仓库为准，避免过时或无法验证的内容。

```bash
bundle exec jekyll build --strict_front_matter
python scripts/check_internal_links.py _site
```

GitHub Actions 的 `.github/workflows/validate.yml` 会运行构建和站内链接检查。`_site/` 和 `work/math-check-site/` 是可重新生成的预览产物，不提交到仓库。
