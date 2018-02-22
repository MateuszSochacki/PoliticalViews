import React from 'react';
import Chart from './Chart';
import Economy from "./Economy";
import Coordinates from "./Coordinates";


class About extends React.Component {


    render() {

        return (

            <div>
                <Chart/>
                <Economy/>
                <Coordinates/>
            </div>
        );
    }

}

export default About;