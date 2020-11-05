module.exports = {
    winRateSeries: [
        {
            name: 'Champion Win Rate',
            data: [48, 49, 52, 51, 50.5]
        }
    ],
    winRateChartOptions: {
        chart: {
            height: 350,
            type: 'line',
        },
        theme: {
            mode: 'dark'
        },
        colors: ['#77B6EA', '#545454'],
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ['10.16', '10.18', '10.19', '10.20', '10.21']
        },
        markers: {
            size: 2
        },
        yaxis: {
            min: 44,
            max: 54,
            tickAmount: 4,
            labels: {
                formatter: function (value) {
                    return value+"%"
                }
            }
        }
    },
    pickRateSeries: [
        {
            name: 'Champion Ban Rate',
            data: [7.2, 3.3, 5.2, 4.3, 6.8]
        }
    ],
    pickRateChartOptions: {
        chart: {
            height: 350,
            type: 'line',
        },
        theme: {
            mode: 'dark'
        },
        colors: ['#77B6EA', '#545454'],
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ['10.16', '10.18', '10.19', '10.20', '10.21']
        },
        markers: {
            size: 2
        },
        yaxis: {
            min: 0,
            max: 20,
            tickAmount: 4,
            labels: {
                formatter: function (value) {
                    return value+"%"
                }
            }
        }
    },
    gameLengthWinRateSeries: [
        {
            name: 'Champion Win Rate by Game Length',
            data: [48, 49, 52, 51, 50.5]
        }
    ],
    gameLengthWinRateOptions: {
        chart: {
            height: 350,
            type: 'line',
        },
        theme: {
            mode: 'dark'
        },
        colors: ['#77B6EA', '#545454'],
        stroke: {
            curve: 'straight'
        },
        xaxis: {
            categories: ['0-25', '25-30', '30-35', '35-40', '40+']
        },
        markers: {
            size: 2
        },
        yaxis: {
            min: 44,
            max: 54,
            tickAmount: 4,
            labels: {
                formatter: function (value) {
                    return value+"%"
                }
            }
        }
    }


}