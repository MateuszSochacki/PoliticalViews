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
import {Checkbox} from "material-ui";

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
    "Jakie prawa oraz zasady powinny obejmować osoby płci żeńskiej w państwie?",
    "Czy jesteś za stosowaniem kary śmierci, jeśli tak to w jakich okolicznościach?",
    "Które z podanych substancji powinny być legalne na rynku handlowym?",
    "Jak duży zakres praw powinny mieć osoby innej orientacji niż heteroseksualna?",
    "W jakich przypadkach aborcja powinna być możliwa do wykonania?",
    "W jakich przypadkach eutanazja powinna być możliwa do wykonania?",
    "Jakie regulacje powinny obowiązywać w kwestii posiadania bronii palnej?"];

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
            },

            womenEdu: false,
            womenEmploy: false,
            womenVoting: false,
            womenWage: false,
            womenMaternity: false,
            stimAlcohol: false,
            stimCannabis: false,
            stimHard: false,
            stimNicotine: false,

            coordinates: props.coordinates
        };

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
                row={true}
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
                            {this.getRadioGroup("Duży(państwo wyznaniowe)", "Średni(kultura oparta o religię)",
                                "Mniejszy(pomniejsze dotacje z publicznego budżetu)", "Żaden(całkowity rozdział)", "religion", this.state.values.religion)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                            {this.getCheckboxForm("womenEdu", "Równe prawa do edukacji", this.state.womenEdu)}
                            {this.getCheckboxForm("womenEmploy", "Równe prawa do zatrudnienia", this.state.waterPollutions)}
                            {this.getCheckboxForm("womenVoting", "Prawo do głosowania", this.state.womenVoting)}
                            {this.getCheckboxForm("womenWage", "Regulowany brak różnic w wynagrodzeniu", this.state.womenWage)}
                            {this.getCheckboxForm("womenMaternity", "Urlop macierzyński", this.state.womenMaternity)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(2)}</FormLabel>
                            {this.getRadioGroup("Brak kary śmierci", "Kara śmierci za najcięższe zbrodnie",
                                "Kara śmierci za cięższe przewinienia", "Powszechna kara śmierci", "deathPenalty", this.state.values.deathPenalty)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(3)}</FormLabel>
                            {this.getCheckboxForm("stimAlcohol", "Alkohol", this.state.stimAlcohol)}
                            {this.getCheckboxForm("stimNicotine", "Nikotyna", this.state.stimNicotine)}
                            {this.getCheckboxForm("stimCannabis", "Marihuana", this.state.stimCannabis)}
                            {this.getCheckboxForm("stimHard", "Narkotyki twarde i psychodeliki", this.state.stimHard)}}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(4)}</FormLabel>
                            {this.getRadioGroup("Zwalczanie innych orietnacji", "Brak równouprawnienia",
                                "Związki partnerskie", "Związki partnerskie oraz prawo do adopcji", "orientation", this.state.values.orientation)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(5)}</FormLabel>
                            {this.getRadioGroup("W każdym przypadku(brak kontroli)", "W przypadkach z komprosimu aborcyjnego",
                                "Prawo powinno zostać zaostrzone", "Aborcja powinna być nielegalna", "abortion", this.state.values.abortion)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(6)}</FormLabel>
                            {this.getRadioGroup("W każdym przypadku(brak kontroli)", "W przypadku chronicznego bólu",
                                "W przypadku chorób nieuleczalnych", "Eutanazja powinna być nielegalna", "euthanasia", this.state.values.euthanasia)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(7)}</FormLabel>
                            {this.getRadioGroup("Brak regulacji", "Stabilność psychiczna oraz brak przeszłości kryminalnej",
                                "Licencja poparta testami", "Brak prawa do posiadania", "race", this.state.values.race)}
                        </FormContainer>
                    </FormControl><br/>
                </Typography>
            </div>

        );
    }
}
/*SocialView.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

export default SocialView;