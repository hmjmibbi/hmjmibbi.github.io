// Mengubah latar belakang Navbar saat di-scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu Hamburger untuk Mobile (Responsif Sederhana)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

function setNavDisplayByWidth() {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    setNavDisplayByWidth();
});

burger.addEventListener('click', () => {
    if (window.getComputedStyle(navLinks).display === 'none') {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

// Tutup menu saat link diklik (khusus mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Reset tampilan menu saat resize
window.addEventListener('resize', setNavDisplayByWidth);

// Bahasa (Indonesia / English)
let langIdBtn = null;
let langEnBtn = null;

const translations = {
    id: {
        navHome: 'Beranda',
        navProgram: 'Kegiatan & Dokumentasi',
        navPartner: 'Kerja Sama',
        heroTitle: 'Himpunan Mahasiswa Jurusan Manajemen',
        heroSubtitle: 'Membentuk pemimpin masa depan yang inovatif, berintegritas, dan profesional. Bersama kami, ciptakan dampak nyata!',
        heroBtn: 'Lihat Agenda Kegiatan Kami',
        sectionTitle: '📅 Program Akan Datang',
        sectionSub: 'Nantikan program-program seru dari kami. Persiapkan dirimu!',
        card1Title: 'Pelatihan Public Speaking',
        card1Meta: '📍 Lokasi: Menyusul | ⏰ Waktu: Menyusul',
        card1Desc: 'Tingkatkan kepercayaan dirimu dalam berbicara di depan umum. Informasi lengkap mengenai pembicara dan pendaftaran akan segera diumumkan.',
        card1Btn: 'Belum Dibuka',
        card2Title: 'English Club HMJM',
        card2Meta: '📍 Lokasi: Menyusul | ⏰ Waktu: Menyusul',
        card2Desc: 'Wadah untuk berlatih dan meningkatkan kemampuan Bahasa Inggris bersama teman-teman sejurusan. Detail kegiatan menyusul.',
        card2Btn: 'Belum Dibuka',
        card3Title: 'Podcast Management Talk',
        card3Meta: '📍 Platform: Spotify & YouTube | ⏰ Jadwal Tayang: Menyusul',
        card3Desc: 'Bincang santai seputar dunia perkuliahan, bisnis, dan manajemen bersama bintang tamu spesial. Pantau terus Instagram kami untuk teaser-nya!',
        card3Btn: 'Nantikan Segera',
        footerTitle: 'Sponsorship & Kolaborasi',
        footerText: 'Kami sangat terbuka untuk menjalin kerja sama strategis dengan perusahaan, instansi, maupun media partner.',
        contactTitle: 'Informasi Kontak',
        partnerTitle: 'Telah Dipercaya Oleh',
        partnerSub: 'Kami bangga telah berkolaborasi dengan berbagai instansi, perusahaan, dan talenta luar biasa.',
        partnerName: 'Viony Lee',
        partnerRole: 'Web Developer',
        partnerDesc: '"Merancang dan mengembangkan website resmi HMJM sebagai bentuk kemitraan strategis dan dukungan digitalisasi organisasi kemahasiswaan."',
        doneTitle: '📸 Program Selesai & Dokumentasi',
        doneSub: 'Momen-momen berharga dari kegiatan yang telah sukses kami selenggarakan.',
        footerCopyright: '© 2026 Himpunan Mahasiswa Jurusan Manajemen. All Rights Reserved.'
    },
    en: {
        navHome: 'Home',
        navProgram: 'Programs & Documentation',
        navPartner: 'Partnership',
        heroTitle: 'Association of Management Students',
        heroSubtitle: 'Building future leaders who are innovative, with integrity and professionalism. Together we create real impact!',
        heroBtn: 'See Our Event Schedule',
        sectionTitle: '📅 Upcoming Programs',
        sectionSub: 'Stay tuned for exciting programs from us. Get ready!',
        card1Title: 'Public Speaking Training',
        card1Meta: '📍 Location: Coming Soon | ⏰ Time: Coming Soon',
        card1Desc: 'Improve your confidence speaking in public. Full details about speakers and registration will be announced soon.',
        card1Btn: 'Not Open Yet',
        card2Title: 'HMJM English Club',
        card2Meta: '📍 Location: Coming Soon | ⏰ Time: Coming Soon',
        card2Desc: 'A place to practice and improve English skills with classmates. Event details coming soon.',
        card2Btn: 'Not Open Yet',
        card3Title: 'Podcast Management Talk',
        card3Meta: '📍 Platform: Spotify & YouTube | ⏰ Air Date: Coming Soon',
        card3Desc: 'A casual talk about college life, business, and management with special guests. Stay tuned on Instagram for teasers!',
        card3Btn: 'Coming Soon',
        partnerTitle: 'Trusted by',
        partnerSub: 'We are proud to collaborate with institutions, companies, and talented individuals.',
        partnerName: 'Viony Lee',
        partnerRole: 'Web Developer',
        partnerDesc: '"Designed and developed the official HMJM website as a strategic partnership and support for digitalizing student organizations."',
        doneTitle: '📸 Programs Completed & Documentation',
        doneSub: 'Precious moments from successful events we have hosted.',
        footerTitle: 'Sponsorship & Collaboration',
        footerText: 'We are open to strategic collaboration with companies, institutions, and media partners.',
        contactTitle: 'Contact Information',
        footerCopyright: '© 2026 Management Student Association. All Rights Reserved.'
    }
};

function applyLanguage(lang) {
    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    setText('nav-home', translations[lang].navHome);
    setText('nav-program', translations[lang].navProgram);
    setText('nav-partner', translations[lang].navPartner);
    setText('hero-title', translations[lang].heroTitle);
    setText('hero-subtitle', translations[lang].heroSubtitle);
    setText('hero-btn', translations[lang].heroBtn);
    setText('section-title', translations[lang].sectionTitle);
    setText('section-sub', translations[lang].sectionSub);
    setText('card1-title', translations[lang].card1Title);
    setText('card1-meta', translations[lang].card1Meta);
    setText('card1-desc', translations[lang].card1Desc);
    setText('card1-btn', translations[lang].card1Btn);
    setText('card2-title', translations[lang].card2Title);
    setText('card2-meta', translations[lang].card2Meta);
    setText('card2-desc', translations[lang].card2Desc);
    setText('card2-btn', translations[lang].card2Btn);
    setText('card3-title', translations[lang].card3Title);
    setText('card3-meta', translations[lang].card3Meta);
    setText('card3-desc', translations[lang].card3Desc);
    setText('card3-btn', translations[lang].card3Btn);
    setText('done-title', translations[lang].doneTitle);
    setText('done-sub', translations[lang].doneSub);
    setText('footer-title', translations[lang].footerTitle);
    setText('footer-text', translations[lang].footerText);
    setText('contact-title', translations[lang].contactTitle);
    setText('partner-title', translations[lang].partnerTitle);
    setText('partner-sub', translations[lang].partnerSub);
    setText('partner-name', translations[lang].partnerName);
    setText('partner-role', translations[lang].partnerRole);
    setText('partner-desc', translations[lang].partnerDesc);
    setText('footer-copyright', translations[lang].footerCopyright);

    if (langIdBtn && langEnBtn) {
        if (lang === 'id') {
            langIdBtn.classList.add('active');
            langEnBtn.classList.remove('active');
            document.documentElement.lang = 'id';
        } else {
            langEnBtn.classList.add('active');
            langIdBtn.classList.remove('active');
            document.documentElement.lang = 'en';
        }
    }

    localStorage.setItem('hmjmLang', lang);
}

function initLanguageButtons() {
    langIdBtn = document.getElementById('lang-id');
    langEnBtn = document.getElementById('lang-en');

    if (langIdBtn) {
        langIdBtn.addEventListener('click', () => {
            console.log('lang-id clicked');
            applyLanguage('id');
        });
    }
    if (langEnBtn) {
        langEnBtn.addEventListener('click', () => {
            console.log('lang-en clicked');
            applyLanguage('en');
        });
    }
}

function initLanguage() {
    const savedLang = localStorage.getItem('hmjmLang') || 'id';
    applyLanguage(savedLang);
}

initLanguageButtons();
initLanguage();

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
