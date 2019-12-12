import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Tabs, Tab} from '@material-ui/core/';
import Chart from './Chart';
import Economy from "./Economy";
import Coordinates from "./Coordinates";
import Forward from '@material-ui/icons/Forward';
import SocialView from "./SocialView";
import StateView from "./StateView";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography/";


function TabContainer(props) {
    return (
        <Typography component="div" style={{paddingBottom: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

class Navigation extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateCoordinates = this.updateCoordinates.bind(this);

        this.state = {
            value: 0,
            coordinates: {
                xAxis: 0,
                yAxis: 0
            }
        }
    }

    handleChange(event, value) {
        this.setState({value});
    }

    handleClick(event) {
        const val = this.state.value + 1;
        this.setState({value: val});
    }

    updateCoordinates(xValue, yValue) {

        const values = this.state.coordinates;
        values.xAxis = this.state.coordinates.xAxis + xValue;
        values.yAxis = this.state.coordinates.yAxis + yValue;
        this.setState({coordinates: values});
    }

    render() {
        const {value} = this.state;

        return (
            <div>
                {/*<MuiThemeProvider>*/}
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h5" color="inherit">
                            Sekcje testu:
                        </Typography>
                        <Typography variant="body2" color="inherit">

                            <Tabs value={value} onChange={this.handleChange} indicatorColor="secondary">
                                <Tab label="Ekonomia"/>
                                <Tab label="Państwo"/>
                                <Tab label="Światopogląd"/>
                            </Tabs>
                        </Typography>
                    </Toolbar>
                </AppBar><br/>
                {value === 0 && <Economy parentUpdate={this.updateCoordinates}/>}
                {value === 1 && <StateView parentUpdate={this.updateCoordinates}/>}
                {value === 2 && <SocialView xAxis={this.state.coordinates.xAxis}
                                            yAxis={this.state.coordinates.yAxis}
                                            parentUpdate={this.updateCoordinates}/>}
                {value === 3 && <Coordinates xAxis={this.state.coordinates.xAxis}
                                            yAxis={this.state.coordinates.yAxis}/>
                }
                <br/>
                <Typography align="center">
                    {this.state.value < 2 ?
                        <Button variant="contained" size="medium" onClick={this.handleClick}>
                            Następny dział <Forward/>
                        </Button> :
                        <Button variant="contained" size="medium" onClick={this.handleClick}>
                            Pokaż wyniki <Forward/>
                        </Button>
                    }
                </Typography>
                {/* </MuiThemeProvider>*/}
            </div>
        )
    }
}

export default Navigation;