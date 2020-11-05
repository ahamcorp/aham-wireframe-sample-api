module.exports = {

    winRateSeries: [
        {
            name: 'Champion Win Rate',
            data: [51, 50, 50.5, 52, 53, 52.7, 51.8, 49, 50.2, 50.3, 50, 50.3, 49.8, 51.8]
        }
    ],

    pickRateSeries: [
        {
            name: "Champion Pick Rate",
            data: [2.42, 2.78, 3.19, 3.61, 3.91, 4.47, 8.45, 9.72, 12.54, 12.46, 11.26, 11.92, 14.19, 14.55]
        }
    ],

    banRateSeries: [
        {
            name: "Champion Ban Rate",
            data: [0.2, 0.2, 0.25, 0.29, 0.28, 0.35, 1.06, 1.95, 4.65, 6.7, 6.36, 6.53, 8.43, 11.41]
        }
    ],

    winRateGameLengthSeries: [
        {
            name: "Champion Win Rate by GameLength",
            data: [49.35, 51.85, 50.57, 46.07, 51.22]
        }
    ],
    
    winRateChartOptions: {
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#77B6EA', '#545454'],
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ['10.07', '10.08', '10.09', '10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.18', '10.19', '10.20', '10.21']
        },
        markers: {
            size: 2
        },
        yaxis: {
            min: 42,
            max: 57,
            tickAmount: 3,
            labels: {
                formatter: function (value) {
                    return value+"%"
                }
            }
        }
    },

    pickRateChartOptions: {
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#77B6EA', '#545454'],
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ['10.07', '10.08', '10.09', '10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.18', '10.19', '10.20', '10.21']
        },
        markers: {
            size: 2
        },
        yaxis: {
            min: 0,
            max: 16,
            tickAmount: 4,
            labels: {
                formatter: function (value) {
                    return value+"%"
                }
            }
        }
    },

    banRateChartOptions: {
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#77B6EA', '#545454'],
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ['10.07', '10.08', '10.09', '10.10', '10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.18', '10.19', '10.20', '10.21']
        },
        markers: {
            size: 2
        },
        yaxis: {
            min: 0,
            max: 12,
            tickAmount: 4,
            labels: {
                formatter: function (value) {
                    return value+"%"
                }
            }
        }
    },

    gameLengthChartOptions: {
        chart: {
            height: 350,
            type: 'line'
        },
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ["0-25", "25-30", "30-35", "35-40", "40+"]
        },
        markers: {
            size: 2
        },
        yaxis: {
            min: 35,
            max: 55,
            tickAmount: 5,
            labels: {
                formatter: function (value) {
                    return value+"%"
                }
            }
        }
    }

}