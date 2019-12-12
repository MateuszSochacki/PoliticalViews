import React, {Component} from 'react';
import {Bar, Scatter} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Twoje poglądy',
                    borderColor: "red",
                    backgroundColor: "transparent",
                    data: [{
                        x: this.props.xAxis,
                        y: this.props.yAxis
                    }, {
                        x: 0,
                        y: 0
                    }, {
                        x: 25,
                        y: 30
                    }, {
                        x: 25,
                        y: -30
                    }, {
                        x: -25,
                        y: 30
                    }, {
                        x: -25,
                        y: -30
                    }],
                    pointBackgroundColor: ['transparent', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                    pointBorderColor: ['red', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                    pointRadius: 6,
                    pointHoverRadius: 10,
                    getPointBorderWidth: 2
                }, {
                    label: 'Prawo i Sprawiedliwość',
                    borderColor: "blue",
                    backgroundColor: "blue",
                    data: [{
                        x: -8,
                        y: 5
                    }],
                    pointBackgroundColor: ['blue'],
                    pointBorderColor: ['blue'],
                    pointRadius: 6,
                    pointHoverRadius: 6,
                    getPointBorderWidth: 6
                }, {
                    label: 'Konfederacja',
                    borderColor: "black",
                    backgroundColor: "black",
                    data: [{
                        x: 12,
                        y: 12
                    }],
                    pointBackgroundColor: ['black'],
                    pointBorderColor: ['black'],
                    pointRadius: 6,
                    pointHoverRadius: 6,
                    getPointBorderWidth: 6,
                }, {
                    label: 'Lewica',
                    borderColor: "red",
                    backgroundColor: "red",
                    data: [{
                        x: -9,
                        y: -17
                    }],
                    pointBackgroundColor: ['red'],
                    pointBorderColor: ['red'],
                    pointRadius: 6,
                    pointHoverRadius: 6,
                    getPointBorderWidth: 6
                }, {
                    label: 'Koalicja Obywatelska',
                    borderColor: "orange",
                    backgroundColor: "orange",
                    data: [{
                        x: -7,
                        y: -14
                    }],
                    pointBackgroundColor: ['orange'],
                    pointBorderColor: ['orange'],
                    pointRadius: 6,
                    pointHoverRadius: 6,
                    getPointBorderWidth: 6
                }, {
                    label: 'Polskie Stronnictwo Ludowe',
                    borderColor: "green",
                    backgroundColor: "green",
                    data: [{
                        x: 0,
                        y: -7
                    }],
                    pointBackgroundColor: ['green'],
                    pointBorderColor: ['green'],
                    pointRadius: 6,
                    pointHoverRadius: 6,
                    getPointBorderWidth: 6
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Wynik',
                    fontSize: 18
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display: true,
                            zeroLineWidth: 3,

                        },
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Ekonomia',
                            fontSize: 16
                        },
                        ticks: {
                            //beginAtZero: true,

                           /* min: -25,
                            max: 25,
                            stepSize: 1,*/
                            callback: function (label, index, labels) {
                                switch (label) {
                                    case -25:
                                        return 'Etatyzm (Socjalizm)';
                                    case 25:
                                        return 'Liberalizm gospodarczy';
                                    default: return ' ';
                                }
                            }
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            zeroLineWidth: 3
                        },
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Światopogląd i Państwo',
                            fontSize: 16
                        },
                        ticks: {
                            //beginAtZero: true,

                            /* min: -30,
                             max: 30,
                             stepSize: 1,*/
                            callback: function (label, index, labels) {
                                switch (label) {
                                    case -30:
                                        return "Liberalizm światopoglądowy";
                                    case 30:
                                        return 'Autorytayzm (Konserwatyzm)';
                                    default:
                                        return ' ';
                                }
                            }
                        }
                    }],
                }
            }
        };
    }

    render() {
        return (

            <div className="chart" style={{height:"760px"}}>
                <Scatter
                    data={this.state.data}
                    options={this.state.options}
                />
            </div>
        )
    };
}

export default Chart;