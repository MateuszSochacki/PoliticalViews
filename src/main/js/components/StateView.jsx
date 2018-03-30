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

function getQuestion(num) {
    const questions = ["Które z podanych czynników wpływających na środowisko, " +
    "powinny być poddane państwowej regulacji?", "Którą z podanych form państwowych uważasz " +
    "za najodpowiedniejszą?"];
    return (questions[num]);
}

class StateView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {
                environment: "",
                autonomy: "",
                system: "",
                votingReq: "",
                militaryService: "",
                foreignPolicy: "",
                immigrationReq: "",
                immigrationRights: "",
            },

            airPollutions: false,
            waterPollutions: false,
            landPollutions: false,
            climateChanges: false

        };

        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
    }

    componentDidMount() {
        console.log("halohalowyłaczam");

    }

    componentWillUnmount() {
        this.saveData();
    }

    getRadioGroup(text1, text2, text3, text4, name, groupValue) {

        return (
            <RadioGroup
                aria-label={name}
                name={name}
                value={groupValue}
                onChange={this.handleChangeRadio}
            >
                <FormControlLabel value={text1} control={<Radio/>} label={text1}/>
                <FormControlLabel value={text2} control={<Radio/>} label={text2}/>
                <FormControlLabel value={text3} control={<Radio/>} label={text3}/>
                <FormControlLabel value={text4} control={<Radio/>} label={text4}/>
            </RadioGroup>
        )
    }

    getCheckboxForm(val, label, checkVal) {

        return (
            <FormControlLabel
                control={
                    <Checkbox
                        checked={checkVal}
                        onChange={this.handleChangeCheck}
                        value={val}
                    />
                }
                label={label}
            />
        );
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

    handleChangeCheck(event) {

            /*value = (value !== true);*/
            this.setState({[event.target.value] : event.target.checked});
        };

    handleChangeRadio(event) {
        const values = this.state.values;
        values[event.target.name] = event.target.value
        this.setState({values});
    }

    render() {

        return (
            <div>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend">{getQuestion(0)}</FormLabel>
                    <FormGroup>
                        {this.getCheckboxForm("airPollutions", "Zanieczyszczenia powietrza.", this.state.airPollutions)}
                        {this.getCheckboxForm("waterPollutions", "Zanieczyszczenia wodne.", this.state.waterPollutions)}
                        {this.getCheckboxForm("landPollutions", "Zanieczyszczenia gleby.", this.state.landPollutions)}
                        {this.getCheckboxForm("climateChanges", "Zmiany klimatu.", this.state.climateChanges)}
                    </FormGroup>
                </FormControl>
                <FormControl component="fieldset" required>
                    <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                    {this.getRadioGroup("Państwo unitarne", "Federacja",
                        "Konfederacja", "Unia", "autonomy", this.state.values.autonomy)}
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