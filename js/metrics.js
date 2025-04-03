/**
 * SP Engineering Works - Metrics and Graphs
 * This file contains functions to generate metrics and graphs based on client data
 */

// Process client data for metrics
function processClientData() {
    // Initialize metrics
    let totalBusinessVolume = 0;
    let ongoingProjects = 0;
    let completedProjects = 0;
    let totalProjects = clientale.length;
    let workTypeCount = {};
    let workTypeVolume = {};
    let businessVolumeByStatus = {
        'Ongoing': 0,
        'Completed': 0
    };

    // Process each client
    clientale.forEach(client => {
        // Convert business volume to a number (in lakhs)
        let volume = 0;
        if (client.business_volume) {
            if (client.business_volume.includes('Cr')) {
                // Convert crores to lakhs (1 crore = 100 lakhs)
                volume = parseFloat(client.business_volume.replace(' Cr', '')) * 100;
            } else {
                volume = parseFloat(client.business_volume.replace(' L', ''));
            }
        }

        // Add to total business volume
        totalBusinessVolume += volume;

        // Count by status
        if (client.status === 'Ongoing') {
            ongoingProjects++;
            businessVolumeByStatus['Ongoing'] += volume;
        } else if (client.status === 'Completed') {
            completedProjects++;
            businessVolumeByStatus['Completed'] += volume;
        }

        // Count by work type
        if (client.work) {
            // Simplify work type by taking the first word
            let workType = client.work.split(' ')[0];
            
            // Special case handling
            if (workType === 'Sunken' || workType === 'Terrace' || workType === 'Building') {
                workType = 'Waterproofing';
            } else if (workType === 'Structural') {
                workType = 'Structural';
            } else if (workType === 'D' || workType === 'Segmental') {
                workType = 'Repairs';
            }
            
            // Count occurrences
            workTypeCount[workType] = (workTypeCount[workType] || 0) + 1;
            
            // Sum business volume by work type
            workTypeVolume[workType] = (workTypeVolume[workType] || 0) + volume;
        }
    });

    return {
        totalBusinessVolume,
        ongoingProjects,
        completedProjects,
        totalProjects,
        workTypeCount,
        workTypeVolume,
        businessVolumeByStatus
    };
}

// Create and render all charts
function renderCharts() {
    const metrics = processClientData();
    
    // Render business volume by work type chart
    renderBusinessVolumeChart(metrics.workTypeVolume);
    
    // Render project status chart
    renderProjectStatusChart(metrics.ongoingProjects, metrics.completedProjects);
    
    // Render work type distribution chart
    renderWorkTypeChart(metrics.workTypeCount);
    
    // Update metric cards
    updateMetricCards(metrics);
}

// Render business volume by work type chart
function renderBusinessVolumeChart(workTypeVolume) {
    const ctx = document.getElementById('businessVolumeChart').getContext('2d');
    
    // Sort work types by volume (descending)
    const sortedWorkTypes = Object.keys(workTypeVolume).sort((a, b) => 
        workTypeVolume[b] - workTypeVolume[a]
    );
    
    // Prepare data for chart
    const labels = sortedWorkTypes;
    const data = sortedWorkTypes.map(type => workTypeVolume[type]);
    
    // Generate colors
    const colors = generateColors(labels.length);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Business Volume (Lakhs)',
                data: data,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.7', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Business Volume by Work Type (in Lakhs)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `₹${context.raw.toFixed(2)} Lakhs`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value + ' L';
                        }
                    }
                }
            }
        }
    });
}

// Render project status chart
function renderProjectStatusChart(ongoingProjects, completedProjects) {
    const ctx = document.getElementById('projectStatusChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Ongoing'],
            datasets: [{
                data: [completedProjects, ongoingProjects],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Project Status Distribution',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} projects (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Render work type distribution chart
function renderWorkTypeChart(workTypeCount) {
    const ctx = document.getElementById('workTypeChart').getContext('2d');
    
    // Sort work types by count (descending)
    const sortedWorkTypes = Object.keys(workTypeCount).sort((a, b) => 
        workTypeCount[b] - workTypeCount[a]
    );
    
    // Prepare data for chart
    const labels = sortedWorkTypes;
    const data = sortedWorkTypes.map(type => workTypeCount[type]);
    
    // Generate colors
    const colors = generateColors(labels.length);
    
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.7', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Work Type Distribution',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} projects (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Update metric cards with calculated values
function updateMetricCards(metrics) {
    // Format currency
    const formatCurrency = (value) => {
        if (value >= 100) {
            return `₹${(value/100).toFixed(2)} Cr`;
        } else {
            return `₹${value.toFixed(2)} L`;
        }
    };
    
    // Update total business volume
    document.getElementById('totalBusinessVolume').textContent = formatCurrency(metrics.totalBusinessVolume);
    
    // Update total projects
    document.getElementById('totalProjects').textContent = metrics.totalProjects;
    
    // Update average project value
    const avgProjectValue = metrics.totalBusinessVolume / metrics.totalProjects;
    document.getElementById('avgProjectValue').textContent = formatCurrency(avgProjectValue);
    
    // Update completion rate
    const completionRate = (metrics.completedProjects / metrics.totalProjects) * 100;
    document.getElementById('completionRate').textContent = `${completionRate.toFixed(1)}%`;
}

// Generate colors for charts
function generateColors(count) {
    const baseColors = [
        'rgba(77, 112, 202, 0.7)',   // Primary blue (brand color)
        'rgba(255, 159, 64, 0.7)',   // Orange
        'rgba(75, 192, 192, 0.7)',   // Teal
        'rgba(153, 102, 255, 0.7)',  // Purple
        'rgba(255, 99, 132, 0.7)',   // Pink
        'rgba(54, 162, 235, 0.7)',   // Blue
        'rgba(255, 206, 86, 0.7)',   // Yellow
        'rgba(231, 233, 237, 0.7)'   // Light grey
    ];
    
    // If we need more colors than in our base set, generate them
    const colors = [];
    for (let i = 0; i < count; i++) {
        if (i < baseColors.length) {
            colors.push(baseColors[i]);
        } else {
            // Generate random colors for additional items
            const r = Math.floor(Math.random() * 255);
            const g = Math.floor(Math.random() * 255);
            const b = Math.floor(Math.random() * 255);
            colors.push(`rgba(${r}, ${g}, ${b}, 0.7)`);
        }
    }
    
    return colors;
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the index page and the charts container exists
    if (document.getElementById('metricsSection')) {
        renderCharts();
    }
});
