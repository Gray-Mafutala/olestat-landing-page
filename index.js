const btnMenu = document.querySelector('.mnmlst-header__menu-btn');
const mobileMenu = document.querySelector('.mnmlst-header__menu-links--mobile');

// Show mobile menu
btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mnmlst-header__menu-links--mobile--active');
});