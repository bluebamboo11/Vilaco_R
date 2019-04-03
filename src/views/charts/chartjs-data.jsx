// random values for demo

const rFactor = () =>  {
    return Math.round(Math.random() * 100);
};

const chartData = {
    'barData': {
        'data': {
            'a': [
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor()
            ],
            'b': [
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor()
            ]
        }
    },
    'doughnutData': {
        'data': [
            400,
            50,
            100,
            80,
            150
        ]
    },
    'lineData': {
        'data': {
            'a': [
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor()
            ],
            'b': [
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor(),
                rFactor()
            ]
        }
    },
    'pieData': {
        'data': [
            300,
            50,
            100
        ]
    },
    'polarData': {
        'data': [
            11,
            16,
            7,
            3
        ]
    },
    'radarData': {
        'data': {
            'a': [
                65,
                59,
                90,
                81,
                56,
                55,
                40
            ],
            'b': [
                28,
                48,
                40,
                19,
                96,
                27,
                100
            ]
        }
    }
};

export { chartData };
