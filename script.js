// script.js

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

// Efek sederhana saat scroll untuk navbar (opsional, sudah dihandle sebagian oleh Tailwind transition)
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Jika sudah scroll lebih dari 50px
        header.classList.add('bg-opacity-90', 'shadow-lg'); // Menambah opacity dan bayangan
    } else {
        header.classList.remove('bg-opacity-90', 'shadow-lg'); // Menghapus opacity dan bayangan
    }
});

console.log("Landing page mouse gaming dengan Tailwind siap!");