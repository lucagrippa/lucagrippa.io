const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuOpenIcon = document.getElementById('mobile-menu-open');
const mobileMenuCloseIcon = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  const isMenuOpen = mobileMenu.getAttribute('aria-expanded') === 'true';

  // Toggle the menu open/closed state
  mobileMenu.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.style.display = isMenuOpen ? 'none' : 'block';

  // Toggle the visibility of the hamburger icons
  mobileMenuOpenIcon.classList.toggle('block', !isMenuOpen);
  mobileMenuOpenIcon.classList.toggle('hidden', isMenuOpen);
  mobileMenuCloseIcon.classList.toggle('hidden', !isMenuOpen);
  mobileMenuCloseIcon.classList.toggle('block', isMenuOpen);
});