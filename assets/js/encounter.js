(() => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const setNavOpen = (open, returnFocus = false) => {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
    nav.classList.toggle('is-open', open);
    if (open) nav.querySelector('a')?.focus();
    if (returnFocus) navToggle.focus();
  };
  navToggle?.addEventListener('click', () => setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true'));
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navToggle?.getAttribute('aria-expanded') === 'true') setNavOpen(false, true);
  });
  window.matchMedia('(max-width: 720px)').addEventListener('change', () => setNavOpen(false));

  const encounter = document.querySelector('[data-encounter]');
  if (!encounter) return;

  const dialogue = encounter.querySelector('[data-dialogue]');
  const skip = encounter.querySelector('[data-dialogue-skip]');
  const commands = [...encounter.querySelectorAll('.battle-command')];
  const save = encounter.querySelector('[data-save]');
  const saveLabel = encounter.querySelector('[data-save-label]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let selected = 0;
  let timer;
  let message = dialogue.textContent;
  let typing = false;

  const finish = () => {
    clearInterval(timer);
    dialogue.textContent = message;
    dialogue.setAttribute('aria-busy', 'false');
    typing = false;
    skip.hidden = true;
  };
  const say = (text, animate = false) => {
    clearInterval(timer);
    message = text;
    if (!animate || reducedMotion.matches) { finish(); return; }
    let index = 1;
    dialogue.textContent = text.slice(0, index);
    dialogue.setAttribute('aria-busy', 'true');
    typing = true;
    skip.hidden = false;
    timer = setInterval(() => {
      dialogue.textContent = text.slice(0, ++index);
      if (index >= text.length) finish();
    }, 38);
  };
  const select = (index, focus = false) => {
    selected = (index + commands.length) % commands.length;
    commands.forEach((command, i) => command.classList.toggle('is-selected', i === selected));
    say(commands[selected].dataset.message);
    if (focus) commands[selected].focus();
  };
  commands.forEach((command, index) => {
    command.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') select(index); });
    command.addEventListener('focus', () => select(index));
  });
  skip.addEventListener('click', finish);
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) finish(); });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const active = document.activeElement;
    const onPage = active === document.body || active === document.documentElement;
    if (!onPage && !commands.includes(active)) return;
    if (event.key === 'Escape' && typing) { event.preventDefault(); finish(); return; }
    if (event.key === 'Enter' && onPage) { event.preventDefault(); commands[selected].click(); return; }
    const narrow = window.matchMedia('(max-width: 540px)').matches;
    const steps = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: narrow ? -2 : -1, ArrowDown: narrow ? 2 : 1 };
    if (!(event.key in steps)) return;
    event.preventDefault();
    select(selected + steps[event.key], true);
  });
  save.addEventListener('click', () => {
    try {
      localStorage.setItem('kaidecker-visit', new Date().toISOString());
      saveLabel.textContent = 'SAVED';
      say('已在这个浏览器记住本次来访。下次见。', true);
    } catch {
      say('这个浏览器无法保存记录。也欢迎你随时回来。');
    }
  });
  let welcome = message;
  try {
    if (localStorage.getItem('kaidecker-visit')) {
      welcome = '欢迎回来，KaiDecker 的小站还在这里。';
      saveLabel.textContent = 'SAVED';
    }
  } catch { /* Browsing and navigation work without local storage. */ }
  say(welcome, true);
})();
