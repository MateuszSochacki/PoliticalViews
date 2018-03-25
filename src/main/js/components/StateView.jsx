import React, { Component } from 'react';
import green from "material-ui/es/colors/green";
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Checkbox from "material-ui/es/Checkbox/Checkbox";
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormHelperText,
} from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

/*const styles = {
    checked: {
        color: green[500],
    },
};*/

class StateView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values : {
                environment : "",
                autonomy : "",
                system : "",
                votingReq : "",
                militaryService : "",
                foreignPolicy : "",
                immigrationReq : "",
                immigrationRights : "",
                media : ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log("halohalowyłaczam");

    }

    componentWillUnmount() {
        this.saveData();
    }


    saveData() {
        fetch('http://localhost:8080/api/stateviews',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state.values)
            }).catch(err => console.error(err));
    }

    handleChange(event) {
        this.setState({selectedValue: event.target.value});
    }

    render() {

        return (
            <div>
                <div>
                    <Checkbox
                        /*checked={this.state.jason}
                        onChange={this.handleChange('jason')}
                        value="jason"*/
                    />
                    <Checkbox
                        /*checked={this.state.jason}
                        onChange={this.handleChange('jason')}
                        value="jason"*/
                    />
                   {/* <Radio
                       checked={this.state.selectedValue === 'a'}
                        onChange={this.handleChange}
                        value="a"
                        name="radio-button-demo"
                        aria-label="A"
                    />
                    <Radio
                        checked={this.state.selectedValue === 'b'}
                        onChange={this.handleChange}
                        value="b"
                        name="radio-button-demo"
                        aria-label="B"
                    />
                    <Radio
                        checked={this.state.selectedValue === 'c'}
                        onChange={this.handleChange}
                        value="c"
                        name="radio-button-demo"
                        aria-label="C"
                    />*/}
                </div>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend"></FormLabel>
                    <RadioGroup>

                    </RadioGroup>
                </FormControl>



            </div>
        );
    }
}

/*StateView.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

export default StateView;