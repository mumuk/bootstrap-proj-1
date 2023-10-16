// Add custom JavaScript here
function useScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 150) {
            navbar.classList.add('bg-dark', "navbar-sticky");
        } else {
            navbar.classList.remove('bg-dark', "navbar-sticky");
        }
    });

}

document.addEventListener('DOMContentLoaded', useScroll);