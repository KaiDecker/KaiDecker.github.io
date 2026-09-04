(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const mobileViewport = window.matchMedia('(max-width: 720px)');

  const syncThemeToggle = () => {
    if (!themeToggle) return;

    const isDark = root.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? '切换浅色模式' : '切换深色模式');
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    syncThemeToggle();
    if (themeMeta) {
      themeMeta.setAttribute('content', theme === 'dark' ? '#11120f' : '#f7f5ef');
    }
  };

  syncThemeToggle();

  themeToggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
  });

  const setNavOpen = (open, { returnFocus = false } = {}) => {
    if (!navToggle || !nav) return;

    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? '关闭导航菜单' : '打开导航菜单');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);

    if (open) {
      nav.querySelector('a, button')?.focus();
    } else if (returnFocus) {
      navToggle.focus();
    }
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setNavOpen(!isOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || navToggle?.getAttribute('aria-expanded') !== 'true') return;

    event.preventDefault();
    setNavOpen(false, { returnFocus: true });
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setNavOpen(false);
    });
  });

  const handleViewportChange = (event) => {
    if (!event.matches) {
      setNavOpen(false);
    }
  };

  if (typeof mobileViewport.addEventListener === 'function') {
    mobileViewport.addEventListener('change', handleViewportChange);
  } else {
    mobileViewport.addListener(handleViewportChange);
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }
})();
