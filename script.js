// js/script.js

// Smooth Scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default jump

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Gulir ke elemen target dengan efek smooth
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efek navbar saat scroll (menambah/menghapus kelas 'scrolled')
const header = document.querySelector('.main-header'); // Pastikan selector sesuai class di HTML

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Jika sudah scroll lebih dari 50px
        header.classList.add('scrolled'); // Tambahkan kelas 'scrolled'
    } else {
        header.classList.remove('scrolled'); // Hapus kelas 'scrolled'
    }
});

console.log("NOVA X-Pro Gaming Mouse Landing Page dimuat (tradisional)!");