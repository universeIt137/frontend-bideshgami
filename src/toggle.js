const btn = document.getElementById('toggle-btn')
const mobileMenu = document.getElementById('mobile-menu')
const iconHamburger = document.getElementById('icon-hamburger')
const iconClose = document.getElementById('icon-close')

btn.addEventListener('click', () => {
    // Toggle menu animation
    if (mobileMenu.classList.contains('max-h-0')) {
        mobileMenu.classList.remove('max-h-0')
        mobileMenu.classList.add('max-h-[500px]')
    } else {
        mobileMenu.classList.remove('max-h-[500px]')
        mobileMenu.classList.add('max-h-0')
    }

    // Toggle icons
    iconHamburger.classList.toggle('hidden')
    iconClose.classList.toggle('hidden')
})
