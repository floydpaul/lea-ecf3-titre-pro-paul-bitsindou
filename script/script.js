document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('open');
        nav.classList.toggle('active');
    });
});
