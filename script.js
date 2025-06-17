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

    // Initialize timeline chart
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
                data: [1, 2, 3, 4, 5], // Arbitrary progression for timeline
                backgroundColor: 'rgba(255, 193, 204, 0.6)', // Soft pink with transparency
                borderColor: '#D4A017', // Gold
                borderWidth: 2
            }]
        },
        options: {
            indexAxis: 'y', // Horizontal bars
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#FFF8E7', // Ivory
                    titleColor: '#8B0000', // Deep red
                    bodyColor: '#333'
                }
            },
            scales: {
                x: {
                    display: false // Hide x-axis for a cleaner timeline
                },
                y: {
                    ticks: {
                        font: {
                            family: 'Lora, serif',
                            size: 14
                        },
                        color: '#8B0000' // Deep red
                    },
                    grid: {
                        display: false
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
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
