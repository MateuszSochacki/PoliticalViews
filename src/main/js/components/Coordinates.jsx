import React, {Component} from 'react';
import Chart from "./Chart";

class Coordinates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            xAxis: this.props.xAxis,
            yAxis: this.props.yAxis
        };
        this.updateX = this.updateX.bind(this);
        this.updateY = this.updateY.bind(this);
    }

    componentDidMount() {
        this.saveData();
    }

    updateX(val) {
        const value = this.state.xAxis + val;
        this.setState({xAxis: value})
    }

    updateY(val) {
        const value = this.state.yAxis + val;
        this.setState({yAxis: value})
    }

    saveData() {
        fetch('http://localhost:8080/api/coordinates',
            {   headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state)
            }).catch( err => console.error(err));
    }

    render() {
        return (
            <div><Chart xAxis={this.state.xAxis}
                        yAxis={this.state.yAxis}/></div>
        );
    }
}
export default Coordinates;