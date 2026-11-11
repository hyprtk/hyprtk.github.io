(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var meta = document.querySelector('meta[name="theme-color"]');
  var status = document.getElementById('copy-status');

  function applyTheme(theme, persist) {
    root.setAttribute('data-theme', theme);
    if (persist) {
      try { localStorage.setItem('theme', theme); } catch (e) {}
    }
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0a0c11' : '#f7f8fb');
    }
  }

  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark', false);

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });
  }

  document.querySelectorAll('.copy').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.querySelector(button.getAttribute('data-copy'));
      if (!target) return;
      var text = target.textContent;

      function done() {
        button.textContent = 'Copied';
        button.setAttribute('data-copied', 'true');
        if (status) status.textContent = 'Install command copied to the clipboard.';
        window.setTimeout(function () {
          button.textContent = 'Copy';
          button.removeAttribute('data-copied');
        }, 1600);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fallback);
      } else {
        fallback();
      }

      function fallback() {
        var area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'absolute';
        area.style.left = '-9999px';
        document.body.appendChild(area);
        area.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(area);
        done();
      }
    });
  });
})();
