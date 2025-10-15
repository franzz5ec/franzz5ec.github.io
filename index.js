// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Optional: Tutup menu saat klik link
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Form Submission (Contoh sederhana)
    const form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah submit default
            alert('Terima kasih! Pesan Anda telah terkirim.');
            form.reset(); // Reset form setelah submit
        });
    }
});