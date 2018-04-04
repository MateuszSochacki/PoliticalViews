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
import Typography from "material-ui/Typography";

/*const styles = {
    checked: {
        color: green[500],
    },
};*/

function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{ paddingBottom: 40 }}>
            {props.children}
        </Typography>
    );
}

function getQuestion(num) {
    const questions = ["Jak duży wpływ powinna mieć religia na rząd lub władce?",
    "Jakie prawa oraz zasady powinny obejmować kobiety w państwie? "];
    return (questions[num]);
}

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
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
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

    getRadioPair(text1, text2, name, groupValue) {

        return (
            <RadioGroup
                aria-label={name}
                name={name}
                value={groupValue}
                onChange={this.handleChangeRadio}
            >
                <FormControlLabel value={text1} control={<Radio/>} label={text1}/>
                <FormControlLabel value={text2} control={<Radio/>} label={text2}/>
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
                <Typography align="center">

                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(0)}</FormLabel>
                        </FormContainer>
                    </FormControl>
                    <FormControl>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                        </FormContainer>
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
/*SocialView.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

export default SocialView;