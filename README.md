# KaiDecker

个人网站，使用 Jekyll 构建并部署到 GitHub Pages。

网站记录个人近况、文章、项目、课程和兴趣。

## 主题

使用 `julianolf/jekyll-theme-8bit` 的本地源码版本，保留原主题的 NES.css 像素边框、蓝色资料卡和字体，并针对中文内容及移动端调整布局。无需额外安装主题 gem 或配置远程主题。

- `assets/css/style.scss`：样式入口，先导入原主题，再导入本站调整。
- `_sass/jekyll-theme-8bit.scss`、`_sass/fonts.scss`、`_sass/rouge-github.scss`：原主题源码。
- `_sass/site-8bit.scss`：本站布局、中文排版和响应式调整。
- `assets/css/vendor/nes.min.css`：NES.css 2.3.0，本地加载。
- `THEME-NOTES.md`：上游版本、许可和备份说明。

当前主题不加载旧的 `main.css`、`encounter.css` 或对应脚本。

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
