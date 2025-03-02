// Temayı değiştirme işlevi
const themeSwitch = document.getElementById('themeSwitch');
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Parçacık animasyonu
const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 10 + 5}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    particlesContainer.appendChild(particle);
}

// Yükleme animasyonu
const loadingOverlay = document.querySelector('.loading-overlay');
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.visibility = 'hidden';
    }, 500);
});

// Sayfa yüklendiğinde animasyonları tetikle
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 200);
    });
});