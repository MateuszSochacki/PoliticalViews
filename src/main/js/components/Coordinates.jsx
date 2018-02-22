import React, { Component } from 'react';

class Coordinates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'xAxis' : '5.0',
            'yAxis' : '6.0'
        };
        //this.saveData(this.state.incTax);
    }

    componentDidMount() {

        fetch('http://localhost:8080/api/coordinates',
            {   headers: {
                'Content-Type': 'application/json',
            },
                method: 'POST',
                body: JSON.stringify(this.state)
            }).catch( err => console.error(err));
    }


    saveData() {

    }
    render() {

        return(
            <div>bazatest</div>
        );
    }
}
export default Coordinates;