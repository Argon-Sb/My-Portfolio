// Chart.js Visualization for Skills

const ctx = document.getElementById('skillsChart').getContext('2d');

const skillsData = {
    labels: ['Python', 'Data Analysis', 'Machine Learning', 'Web Dev', 'SQL', 'Deep Learning'],
    datasets: [{
        label: 'Proficiency Level',
        data: [90, 85, 80, 75, 85, 70], // Example data points
        backgroundColor: 'rgba(106, 0, 255, 0.2)', // Primary color with opacity
        borderColor: '#6a00ff',
        pointBackgroundColor: '#ff00c8', // Secondary color
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#ff00c8',
        borderWidth: 2
    }]
};

const config = {
    type: 'radar',
    data: skillsData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                    color: '#b0b0b0',
                    font: {
                        size: 14,
                        family: "'Outfit', sans-serif"
                    }
                },
                ticks: {
                    backdropColor: 'transparent',
                    color: 'transparent' // Hide numbers if cleaner look desired
                }
            }
        }
    }
};

new Chart(ctx, config);
