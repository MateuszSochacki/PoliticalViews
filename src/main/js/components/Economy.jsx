import React, { Component } from 'react';

class Economy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'incTax' : "20%"
        };
        //this.saveData(this.state.incTax);
    }

    componentDidMount() {

        fetch('http://localhost:8080/api/economy',
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
export default Economy;