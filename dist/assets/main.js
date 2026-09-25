/* Progressive enhancement: content and links work without JavaScript. */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
const mobileQuery = window.matchMedia('(max-width: 600px)');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
function syncMenu() {
  document.documentElement.classList.add('js-nav');
  menuButton.hidden = !mobileQuery.matches;
  closeMenu();
}
syncMenu();
mobileQuery.addEventListener('change', syncMenu);
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (link && mobileQuery.matches) {
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
const copyButton = document.querySelector('#copy-email');
if (navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('kishormallapu2002@gmail.com');
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Could not copy. Select the email address above to copy it.';
    }
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('pending');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('pending');
    observer.observe(element);
  });
}
