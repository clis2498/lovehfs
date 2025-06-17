// Existing code in script.js
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

// Existing music toggle function
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

// Add to end of script.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('timelineChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'The First Spark',
                'Brightening My Days',
                'Time Together',
                'Moments That Mattered',
                'Love Confessed'
            ],
            datasets: [{
                label: 'Our Milestones',
                data: [1, 2, 3, 4, 5],
                backgroundColor: 'rgba(255, 193, 204, 0.6)',
                borderColor: '#D4A017',
                borderWidth: 2
            }]
        },
        options: {
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#FFF8E7',
                    titleColor: '#8B0000',
                    bodyColor: '#333'
                }
            },
            scales: {
                x: { display: false },
                y: {
                    ticks: {
                        font: { family: 'Lora, serif', size: 14 },
                        color: '#8B0000'
                    },
                    grid: { display: false }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
