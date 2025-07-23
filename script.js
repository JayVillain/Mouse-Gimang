// script.js

// Smooth Scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Efek sederhana saat scroll untuk navbar (mengubah background dan shadow)
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-90', 'shadow-lg');
    } else {
        header.classList.remove('bg-opacity-90', 'shadow-lg');
    }
});

console.log("NOVA X-Pro Gaming Mouse Landing Page siap dengan animasi!");

// Jika Anda ingin efek paralaks yang lebih canggih, Anda akan menambahkannya di sini.
// Contoh (membutuhkan lebih banyak kode dan bisa menggunakan library seperti Rellax.js):
/*
import Rellax from 'rellax';
var rellax = new Rellax('.rellax'); // Akan menargetkan elemen dengan class 'rellax'
*/