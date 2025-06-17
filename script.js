document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations for story sections
    const sections = document.querySelectorAll('.story-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});

// Music toggle function
function toggleMusic() {
    const music = document.getElementById('background-music');
    const button = document.querySelector('.music-toggle');
    if (music.paused) {
        music.play();
        button.textContent = 'Pause Music';
    } else {
        music.pause();
        button.textContent = 'Play Music';
    }
}
