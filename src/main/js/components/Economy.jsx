import React, { Component } from 'react';
import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormHelperText,
} from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';


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

            </div>
        );
    }
}
export default Economy;