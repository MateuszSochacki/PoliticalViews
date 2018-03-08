import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Chart from './Chart';
import Economy from "./Economy";
import Coordinates from "./Coordinates";


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class NavBar extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);


        this.state = {
            value : 0,
            economy : new Economy(),
            chart : new Chart(),
            coordinates : new Coordinates()
        }
    }

    handleChange(event, value) {

        this.setState({ value });
    }

    render() {
        const { value } = this.state;


        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Sekcje testu:
                        </Typography>
                        <Typography variant ="body2" color="inherit">
                            <Tabs value={value} onChange={this.handleChange}>
                                <Tab label="Ekonomia" />
                                <Tab label="Państwo" />
                                <Tab label="Światopogląd" />
                            </Tabs>
                        </Typography>
                    </Toolbar>
                </AppBar><br/>
                {value === 0 && this.state.economy.render()}
                {value === 1 && this.state.chart.render()}
                {value === 2 && this.state.coordinates.render()}

            </div>


        )
    }

}
export default NavBar;