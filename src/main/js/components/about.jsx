import React from 'react';
import Chart from './Chart';
import Economy from "./Economy";
import Coordinates from "./Coordinates";
import NavBar from "./NavBar";


class About extends React.Component {


    render() {

        return (

            <div>
                <NavBar/>
                <Chart/>
                <Economy/>
                <Coordinates/>
            </div>
        );
    }

}

export default About;