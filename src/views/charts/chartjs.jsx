
import React from 'react';
import { Doughnut, Line, Bar, Radar, Pie, Polar } from 'react-chartjs-2';
import {
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import * as d from './chartjs-data';

// Doughnut Chart
const
    // Bar Chart
    barData = {
        'datasets': [
            {
                'backgroundColor': '#26c6da',
                'borderColor': '#26c6da',
                'data': d.chartData.barData.data.a,
                'label': 'Apple'
            },
            {
                'backgroundColor': '#1e88e5',
                'borderColor': '#1e88e5',
                'data': d.chartData.barData.data.b,
                'label': 'Google'
            }
        ],
        'labels': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ]
    },
    doughnutData = {
        'datasets': [
            {
                'backgroundColor': [
                    '#fc4b6c',
                    '#1e88e5',
                    '#ffb22b',
                    '#26c6da',
                    '#fd7e14'
                ],
                'data': d.chartData.doughnutData.data,
                'hoverBackgroundColor': [
                    '#fc4b6c',
                    '#1e88e5',
                    '#ffb22b',
                    '#26c6da',
                    '#fd7e14'
                ]
            }
        ],

        'labels': [
            'Red',
            'Blue',
            'Yellow',
            'Green',
            'Orange'
        ]
    },

    // Line chart
    lineData = {
        'datasets': [
            {
                'backgroundColor': 'rgb(38, 198, 218)',
                'borderColor': 'rgb(38, 198, 218)',
                'data': d.chartData.lineData.data.a,
                'label': 'Income',
                'pointBorderColor': '#fff'
            },
            {
                'backgroundColor': 'rgb(246, 249, 252)',
                'borderColor': 'rgb(246, 249, 252)',
                'data': d.chartData.lineData.data.b,
                'label': 'Outcome',
                'pointBorderColor': '#fff'
            }
        ],
        'labels': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ]
    },

    // Pie Chart
    pieData = {
        'datasets': [
            {
                'backgroundColor': [
                    '#26c6da',
                    '#1e88e5',
                    '#7460ee'
                ],
                'data': d.chartData.pieData.data,
                'hoverBackgroundColor': [
                    '#26c6da',
                    '#1e88e5',
                    '#7460ee'
                ]
            }
        ],
        'labels': [
            'Green',
            'Blue',
            'Indigo'
        ]
    },

    // Polar Chart
    polarData = {
        'datasets': [
            {
                'backgroundColor': [
                    '#fc4b6c',
                    '#1e88e5',
                    '#fd7e14',
                    '#26c6da'
                ],
                'data': d.chartData.polarData.data,
                'label': 'My dataset'
            }
        ],
        'labels': [
            'Label 1',
            'Label 2',
            'Label 3',
            'Label 4'
        ]
    },


    // Rader Chart
    radarData = {
        'datasets': [
            {
                'backgroundColor': 'rgba(252, 75, 108,0.2)',
                'borderColor': 'rgba(252, 75, 108,0.2)',
                'data': d.chartData.radarData.data.a,
                'label': 'Apple'
            },
            {
                'backgroundColor': 'rgba(38, 198, 218,0.2)',
                'borderColor': 'rgba(38, 198, 218,0.2)',
                'data': d.chartData.radarData.data.b,
                'label': 'Google'
            }
        ],
        'labels': [
            'Eating',
            'Drinking',
            'Sleeping',
            'Designing',
            'Coding',
            'Cycling',
            'Running'
        ]
    };


class Chartjs extends React.Component {
    render() {
        return <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Pie Chart</CardTitle>
                            <div className="chart-wrapper" style={{
                                'height': 350,
                                'margin': '0 auto',
                                'width': '100%'
                            }}>
                                <Pie data={pieData} options={{
                                    'legend': {
                                        'display': true,
                                        'labels': { 'fontFamily': 'Poppins' }
                                    },
                                    'maintainAspectRatio': false
                                }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Bar Chart</CardTitle>
                            <div className="chart-wrapper" style={{
                                'height': 350,
                                'margin': '0 auto',
                                'width': '100%'
                            }}>
                                <Bar data={barData} options={{
                                    'legend': {
                                        'display': true,
                                        'labels': { 'fontFamily': 'Poppins' }
                                    },
                                    'maintainAspectRatio': false,
                                    'scales': {
                                        'xAxes': [
                                            {
                                                'gridLines': { 'display': false },
                                                'ticks': { 'fontFamily': 'Poppins' }
                                            }
                                        ],
                                        'yAxes': [
                                            {
                                                'gridLines': { 'display': false },
                                                'ticks': { 'fontFamily': 'Poppins' }
                                            }
                                        ]
                                    }
                                }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Doughnut Chart</CardTitle>
                            <div className="chart-wrapper" style={{
                                'height': 350,
                                'margin': '0 auto',
                                'width': '100%'
                            }}>
                                <Doughnut data={doughnutData} options={{
                                    'legend': {
                                        'display': true,
                                        'labels': { 'fontFamily': 'Poppins' }
                                    },
                                    'maintainAspectRatio': false
                                }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Line Chart</CardTitle>
                            <div className="chart-wrapper" style={{
                                'height': 350,
                                'margin': '0 auto',
                                'width': '100%'
                            }}>
                                <Line data={lineData} options={{
                                    'legend': {
                                        'display': true,
                                        'labels': { 'fontFamily': 'Poppins' }
                                    },
                                    'maintainAspectRatio': false,
                                    'scales': {
                                        'xAxes': [
                                            {
                                                'gridLines': { 'display': false },
                                                'ticks': { 'fontFamily': 'Poppins' }
                                            }
                                        ],
                                        'yAxes': [
                                            {
                                                'gridLines': { 'display': false },
                                                'ticks': { 'fontFamily': 'Poppins' }
                                            }
                                        ]
                                    }
                                }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Polar Chart</CardTitle>
                            <div className="chart-wrapper" style={{
                                'height': 350,
                                'margin': '0 auto',
                                'width': '100%'
                            }}>
                                <Polar data={polarData} options={{
                                    'legend': {
                                        'display': true,
                                        'labels': { 'fontFamily': 'Poppins' }
                                    },
                                    'maintainAspectRatio': false
                                }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <CardTitle>Radar Chart</CardTitle>
                            <div className="chart-wrapper" style={{
                                'height': 350,
                                'margin': '0 auto',
                                'width': '100%'
                            }}>
                                <Radar data={radarData} options={{
                                    'legend': {
                                        'display': true,
                                        'labels': { 'fontFamily': 'Poppins' }
                                    },
                                    'maintainAspectRatio': false
                                }} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>;
    }
}

export default Chartjs;
