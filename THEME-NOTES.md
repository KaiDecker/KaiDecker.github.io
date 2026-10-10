# 8bit 主题维护记录

本站采用本地源码方式集成 https://github.com/julianolf/jekyll-theme-8bit ，不是另外画一套相似样式。

## 上游版本

- jekyll-theme-8bit：0.7.1，提交 `0d9905be8075135becb01ebfe91ed6470387621a`。
- 原样保留 `_sass/jekyll-theme-8bit.scss`、`_sass/fonts.scss`、`_sass/rouge-github.scss` 和 Press Start 2P 字体。
- NES.css：2.3.0，来自 `https://cdn.jsdelivr.net/npm/nes.css@2.3.0/css/nes.min.css`，以本地资源加载。
- 主题和 NES.css 的 MIT 许可位于 `assets/licenses/`；字体 OFL 许可位于 `assets/fonts/Press-Start-2P/OFL.txt`。

## 本站调整

`_sass/site-8bit.scss` 放在原主题之后加载。保留像素边框、蓝色资料卡、按钮和浅黄色页脚；改用响应式网格。首页按 About / Posts / Projects / Course 排列。未引入上游评论、统计、下载入口和限制页面缩放的旧脚本。

固定使用中文像素字体，不再提供字体切换，也不读取以前保存的字体偏好。代码块保持等宽字体。

中文字体使用 Fusion Pixel Font 12px proportional zh-Hans，2026-10-10 从官方示例站 `https://fusion-pixel-font.takwolf.com/fusion-pixel-12px-proportional-zh_hans.otf.woff2` 下载。原始 WOFF2 的 SHA-256 为 `8AE779D721A1948CB8444DF195A6EBC3047D713C4F270B4466E4E8B0780E1D46`。另用 FontTools 无损转封装 WOFF，兼容无法读取该 WOFF2 的浏览器；不修改字形。文件和 SIL OFL 1.1 许可位于 `assets/fonts/Fusion-Pixel/`，上游项目为 `https://github.com/TakWolf/fusion-pixel-font`。

页脚不显示主题作者署名。主题 MIT 版权声明及完整许可仍随源码保留于 `assets/licenses/jekyll-theme-8bit-LICENSE.txt`。

文章、项目数据、永久链接与现有 Jekyll / GitHub Pages 构建方式保留。样式与字体均本地提供，不依赖访客访问 CDN。

数学文章使用本地 MathJax 3.2.2 `tex-svg.js`（来自 `https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js`），许可位于 `assets/licenses/MathJax-LICENSE.txt`。`assets/js/mathjax-config.js` 将处理范围限制为正文，关闭动态扩展加载；SVG 数学字形不受正文字体影响。入口按页面类型加载：文章默认启用，其他页面通过 `math: true` 启用。写法和预览草稿见 README。
