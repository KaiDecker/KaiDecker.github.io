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

  const snowdinHome = document.querySelector('[data-snowdin-home]');
  if (snowdinHome) {
    const townScene = snowdinHome.querySelector('[data-town-scene]');
    const shopScene = snowdinHome.querySelector('[data-shop-scene]');
    const townPanel = snowdinHome.querySelector('[data-town-panel]');
    const shopPanel = snowdinHome.querySelector('[data-shop-panel]');
    const locationLabel = snowdinHome.querySelector('[data-location-label]');
    const shopDialogue = snowdinHome.querySelector('[data-shop-dialogue]');
    const enterShopButtons = Array.from(snowdinHome.querySelectorAll('[data-enter-shop]'));
    const leaveShopButton = snowdinHome.querySelector('[data-leave-shop]');
    const choices = Array.from(snowdinHome.querySelectorAll('.shop-choices .game-choice'));
    const welcomeLine = '* 欢迎，旅人。想去哪里看看？';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let currentScene = 'town';
    let selectedIndex = 0;
    let dialogueTimer;

    const selectChoice = (nextIndex, moveFocus = false) => {
      if (!choices.length) return;

      selectedIndex = (nextIndex + choices.length) % choices.length;
      choices.forEach((choice, index) => {
        const selected = index === selectedIndex;
        choice.classList.toggle('is-selected', selected);
        choice.tabIndex = selected ? 0 : -1;
      });

      if (moveFocus) choices[selectedIndex].focus();
    };

    const typeShopGreeting = () => {
      if (dialogueTimer) window.clearInterval(dialogueTimer);
      if (reducedMotion) {
        shopDialogue.textContent = welcomeLine;
        return;
      }

      let characterIndex = 0;
      shopDialogue.textContent = '';
      dialogueTimer = window.setInterval(() => {
        characterIndex += 1;
        shopDialogue.textContent = welcomeLine.slice(0, characterIndex);
        if (characterIndex >= welcomeLine.length) window.clearInterval(dialogueTimer);
      }, 44);
    };

    const showScene = (sceneName, { returnFocus = false } = {}) => {
      currentScene = sceneName;
      const isInsideShop = sceneName === 'shop';
      townScene.hidden = isInsideShop;
      shopScene.hidden = !isInsideShop;
      townPanel.hidden = isInsideShop;
      shopPanel.hidden = !isInsideShop;
      locationLabel.textContent = isInsideShop ? 'SNOWDIN · SHOP' : 'SNOWDIN';
      document.body.dataset.homeScene = sceneName;

      if (isInsideShop) {
        selectChoice(0);
        typeShopGreeting();
        window.requestAnimationFrame(() => choices[0]?.focus());
      } else {
        if (dialogueTimer) window.clearInterval(dialogueTimer);
        if (returnFocus) snowdinHome.querySelector('.shop-entrance-button')?.focus();
      }
    };

    enterShopButtons.forEach((button) => {
      button.addEventListener('click', () => showScene('shop'));
    });

    leaveShopButton.addEventListener('click', () => showScene('town', { returnFocus: true }));

    choices.forEach((choice, index) => {
      choice.tabIndex = index === 0 ? 0 : -1;
      choice.addEventListener('pointerenter', () => selectChoice(index));
      choice.addEventListener('focus', () => selectChoice(index));
    });

    document.addEventListener('keydown', (event) => {
      if (currentScene !== 'shop') return;

      if (event.key === 'Escape') {
        event.preventDefault();
        showScene('town', { returnFocus: true });
        return;
      }

      const activeElement = document.activeElement;
      const focusedChoice = choices.includes(activeElement);
      const pageHasFocus = activeElement === document.body || activeElement === document.documentElement;
      if (!focusedChoice && !pageHasFocus) return;

      if (event.key === 'Enter' && pageHasFocus) {
        event.preventDefault();
        choices[selectedIndex]?.click();
        return;
      }

      if (!['ArrowUp', 'ArrowDown'].includes(event.key)) return;

      event.preventDefault();
      const offset = event.key === 'ArrowDown' ? 1 : -1;
      selectChoice(selectedIndex + offset, true);
    });
  }

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
