import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';

class CustomChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Twoje poglądy',
                    borderColor: "red",
                    backgroundColor: "blue",
                    data: [{
                        x: parseInt(this.props.xAxis),
                        y: parseInt(this.props.yAxis)
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
                    pointBackgroundColor: ['blue', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                    pointBorderColor: ['red', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
                    pointRadius: 6,
                    pointHoverRadius: 10,
                    getPointBorderWidth: 2
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
export default CustomChart;