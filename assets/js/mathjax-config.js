// Kramdown preserves $$...$$ as \(...\) inline and \[...\] in blocks.
// Keep dollar prices and code samples out of the math parser.
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    // All these packages are bundled locally; no runtime CDN requests.
    packages: ['base', 'ams', 'newcommand', 'noundefined', 'configmacros']
  },
  options: {
    ignoreHtmlClass: 'math-ignore',
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    enableMenu: false
  },
  startup: { elements: ['.prose'] },
  svg: { fontCache: 'local' }
};
