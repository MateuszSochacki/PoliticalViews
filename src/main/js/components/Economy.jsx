import React, { Component } from 'react';
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormHelperText,
} from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Typography from "material-ui/Typography";

function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{ paddingBottom: 40 }}>
            {props.children}
        </Typography>
    );
}

function getQuestion(num) {
    const questions = [];
    return (questions[num]);
}

class Economy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values : {
                rich : "",
                minWage : "",
                protectionism : "",
                corpTax : "",
                incTax : "",
                ground : "",
                welfare : "",
                education : "",
                healthcare : "",
                monopolies : "",
                retirenment : "",
                tradeUnions : "",
                vat : "",
                controls : ""
            }
        };
    }

    saveData() {
        fetch('http://localhost:8080/api/economy',
            {   headers: {
                'Content-Type': 'application/json',
            },
                method: 'POST',
                body: JSON.stringify(this.state.values)
            }).catch( err => console.error(err));

    }

    componentWillUnmount() {
        this.saveData();
    }

    render() {

        return(
            <div>
                <Typography align="center">
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
                </Typography>
            </div>
        );
    }
}
export default Economy;