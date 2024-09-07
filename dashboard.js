document.addEventListener('DOMContentLoaded', function () {
    fetch('esg_values.csv')
        .then(response => response.text())
        .then(data => {
            const parsedData = parseCSV(data);
            renderSpeedometer(parsedData);
        });

    function parseCSV(data) {
        const rows = data.trim().split('\n');
        const result = {};
        for (let i = 1; i < rows.length; i++) {
            const [key, value] = rows[i].split(',');
            result[key] = parseFloat(value);
        }
        return result;
    }

    function renderSpeedometer(data) {
        const ctx = document.getElementById('speedometer').getContext('2d');

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                }]
            },
            options: {
                circumference: Math.PI,
                rotation: Math.PI,
                cutoutPercentage: 70,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            const dataset = data.datasets[tooltipItem.datasetIndex];
                            const total = dataset.data.reduce((acc, value) => acc + value, 0);
                            const value = dataset.data[tooltipItem.index];
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${data.labels[tooltipItem.index]}: ${percentage}%`;
                        }
                    }
                }
            }
        });
    }
});
