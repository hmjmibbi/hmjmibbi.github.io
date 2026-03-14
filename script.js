// Mengubah latar belakang Navbar saat di-scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

<<<<<<< HEAD
// Menu Hamburger untuk Mobile
=======
// Menu Hamburger untuk Mobile (Opsional/Dasar)
>>>>>>> 4fcf99d1e0dbf827f4b0d492741996e9e178c870
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
<<<<<<< HEAD
=======
    // Toggle nav
>>>>>>> 4fcf99d1e0dbf827f4b0d492741996e9e178c870
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
<<<<<<< HEAD
    }
});

// ==========================================
// FUNGSI BARU: Sistem Tab untuk Kegiatan
// ==========================================
function openTab(evt, tabId) {
    // Sembunyikan semua konten tab
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Hapus class 'active' dari semua tombol
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Tampilkan tab saat ini dan tambahkan class 'active' ke tombol yang diklik
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}
=======
        
        // Atur margin ulang untuk versi mobile
        const listItems = document.querySelectorAll('.nav-links li');
        listItems.forEach(item => {
            item.style.margin = '15px 0';
        });
    }
});
>>>>>>> 4fcf99d1e0dbf827f4b0d492741996e9e178c870
