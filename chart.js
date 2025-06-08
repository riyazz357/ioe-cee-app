// Initialize performance charts
document.addEventListener('DOMContentLoaded', function() {
    // Physics Chart
    const physicsCtx = document.getElementById('physicsChart').getContext('2d');
    new Chart(physicsCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [72, 28],
                backgroundColor: ['#28a745', '#e9ecef'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Chemistry Chart
    const chemistryCtx = document.getElementById('chemistryChart').getContext('2d');
    new Chart(chemistryCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [65, 35],
                backgroundColor: ['#ffc107', '#e9ecef'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    // Maths Chart
    const mathsCtx = document.getElementById('mathsChart').getContext('2d');
    new Chart(mathsCtx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [58, 42],
                backgroundColor: ['#dc3545', '#e9ecef'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            responsive: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
});