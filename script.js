// Mengubah latar belakang Navbar saat di-scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu Hamburger untuk Mobile (Opsional/Dasar)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Toggle nav
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = '#0A2540';
        navLinks.style.width = '100%';
        navLinks.style.textAlign = 'center';
        navLinks.style.padding = '20px 0';
        
        // Atur margin ulang untuk versi mobile
        const listItems = document.querySelectorAll('.nav-links li');
        listItems.forEach(item => {
            item.style.margin = '15px 0';
        });
    }
});
