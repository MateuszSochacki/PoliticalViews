import React, {Component} from 'react';
import Chart from "./Chart";

class Coordinates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            economy: this.props.xAxis,
            social: this.props.yAxis
        };
        this.updateX = this.updateX.bind(this);
        this.updateY = this.updateY.bind(this);
    }

    componentDidMount() {
        this.saveData();
    }

    updateX(val) {
        const value = this.state.economy + val;
        this.setState({economy: value})
    }

    updateY(val) {
        const value = this.state.social + val;
        this.setState({social: value})
    }

    saveData() {
        fetch('http://localhost:8080/addCoordinates',
            {   headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state)
            }).catch( err => console.error(err));
    }

    render() {
        return (
            <div><Chart xAxis={this.state.economy}
                        yAxis={this.state.social}/></div>
        );
    }
}
export default Coordinates;