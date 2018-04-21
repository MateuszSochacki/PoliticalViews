import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Chart from './Chart';
import Economy from "./Economy";
import Coordinates from "./Coordinates";
import ForwardIcon from 'material-ui-icons/ArrowForward';
import SocialView from "./SocialView";
import StateView from "./StateView";
import Typography from "material-ui/es/Typography/Typography";
import Button from "material-ui/es/Button/Button";


function TabContainer(props) {
    return (
        <Typography component="div" style={{ paddingBottom: 8 * 3 }}>
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
            value : 0,
            coordinates : new Coordinates()
        }
    }

    handleChange(event, value) {

        this.setState({ value });
    }

    handleClick(event) {

        /*if (this.state.value === 0) {
            saveData(this.state);
        } else if (this.state.value === 1) {
            this.state.stateView.saveData();
        } else if (this.state.value === 2) {
            this.state.socialView.saveData();
        }*/

        const val = this.state.value + 1;
        this.setState({value : val})

    }

    updateCoordinates(props) {

        this.setState({coordinates: props});
    }

    render() {
        const { value } = this.state;

        return (
            <div>
                {/*<MuiThemeProvider>*/}
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Sekcje testu:
                        </Typography>
                        <Typography variant ="body2" color="inherit">

                            <Tabs value={value} onChange={this.handleChange} indicatorColor="secondary">
                                <Tab label="Ekonomia"/>
                                <Tab label="Państwo"/>
                                <Tab label="Światopogląd" />
                            </Tabs>
                        </Typography>

                    </Toolbar>
                </AppBar><br/>
                {value === 0 && <Economy coordinates={this.state.coordinates}
                                         parentUpdate={this.updateCoordinates}/>}
                {value === 1 && <StateView coordinates={this.state.coordinates}
                                           parentUpdate={this.updateCoordinates}/>}
                {value === 2 && <SocialView coordinates={this.state.coordinates}
                                            parentUpdate={this.updateCoordinates}/>}
                <br/>
                <Typography align="center">
                    {this.state.value < 2 ?
                        <Button variant="raised" size="medium" onClick={this.handleClick}>
                            Następny dział <ForwardIcon/>
                        </Button> :
                        <Button variant="raised" size="medium" onClick={this.handleClick}>
                            Pokaż wyniki <ForwardIcon/>
                        </Button>
                    }

                </Typography>

               {/* </MuiThemeProvider>*/}
            </div>
        )
    }
}
export default Navigation;