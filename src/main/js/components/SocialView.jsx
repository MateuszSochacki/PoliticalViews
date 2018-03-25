import React, { Component } from 'react';
import green from "material-ui/es/colors/green";
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel
} from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

/*const styles = {
    checked: {
        color: green[500],
    },
};*/


class SocialView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values : {
                religion : "",
                women : "",
                deathPenalty : "",
                stimulants : "",
                orientation : "",
                abortion : "",
                euthanasia : "",
                race : ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    saveData() {
        fetch('http://localhost:8080/api/socialviews',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state.values)
            }).catch(err => console.error(err));
    }

    componentWillUnmount() {
        this.saveData();
    }

    handleChange(event) {
        this.setState({selectedValue: event.target.value});
    }

    render() {

        return (
            <div>
                <Radio
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
                />
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
/*SocialView.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

export default SocialView;