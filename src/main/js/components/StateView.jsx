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
import Typography from "material-ui/Typography/";


function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{ paddingBottom: 40 }}>
            {props.children}
        </Typography>
    );
}

function getQuestion(num) {
    const questions = ["Które z podanych czynników wpływających na środowisko, " +
    "powinny być poddane państwowej regulacji?", "Którą z podanych form państwowych uważasz " +
    "za najodpowiedniejszą?", "Jaki z podanych systemów sprawowania władzy popierasz?",
    "Jakie wymagania powininna spełniać osoba chcąca głosować w wyborach?",
    "Czy popierasz obowiązkową służbę wojoskową?", "Który z podanych typów " +
    "polityki zagranicznej popierasz, uwzględniając użycie armii?",
    "Jakie czynniki powinne być brane pod uwagę podczas przyjmowania imigrantów?",
    "Jakie powinny obowiązywać prawa imigranckie w porównaniu do rodowitych obywateli",
    "Jak powinna zostać rozwiązana kwestia mediów w państwie?"];
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
            climateChanges: false,
            ageReq : false,
            eduReq : false,
            wealthReq : false,
            ethnicityReq : false,
            languageIReq : false,
            eduIReq : false,
            ethnicityIReq : false,
            religionReq : false,

            coordinates: props.coordinates
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
            <div>
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
            </div>
        )
    }

    getRadioPair(text1, text2, name, groupValue) {

        return (
            <div>
                <RadioGroup
                    aria-label={name}
                    name={name}
                    value={groupValue}
                    onChange={this.handleChangeRadio}
                    row={true}
                >
                    <FormControlLabel value={text1} control={<Radio/>} label={text1}/>
                    <FormControlLabel value={text2} control={<Radio/>} label={text2}/>
                </RadioGroup>
            </div>
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

    updateCoordinates() {

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
                <Typography align="center">
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(0)}</FormLabel>
                                {this.getCheckboxForm("airPollutions", "Zanieczyszczenia powietrza.", this.state.airPollutions)}
                                {this.getCheckboxForm("waterPollutions", "Zanieczyszczenia wodne.", this.state.waterPollutions)}
                                {this.getCheckboxForm("landPollutions", "Zanieczyszczenia gleby.", this.state.landPollutions)}
                                {this.getCheckboxForm("climateChanges", "Zmiany klimatu.", this.state.climateChanges)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                            {this.getRadioGroup("Państwo unitarne", "Federacja",
                                "Konfederacja", "Unia", "autonomy", this.state.values.autonomy)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(2)}</FormLabel>
                            {this.getRadioGroup("Rządy autorytarne", "Ustrój jednopartyjny",
                                "demokracja parlamentarna(pośrednia)", "Demokracja bezpośrednia", "system", this.state.values.system)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(3)}</FormLabel>
                            <FormGroup row={true}>
                                {this.getCheckboxForm("ageReq", "Warunek wiekowy", this.state.ageReq)}
                                {this.getCheckboxForm("eduReq", "Odpowiednie wykrztałcenie", this.state.eduReq)}
                                {this.getCheckboxForm("wealthReq", "Odpowiednia majętność", this.state.wealthReq)}
                                {this.getCheckboxForm("ethnicityReq", "Przynależność do grupy etnicznej", this.state.ethnicityReq)}
                            </FormGroup>
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(4)}</FormLabel>
                            {this.getRadioPair("Popieram", "Nie popieram", "militaryService", this.state.values.militaryService)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(5)}</FormLabel>
                            {this.getRadioGroup("Izolacjonizm", "Neutralność",
                                "Interwencjonizm", "Ekpsansjonizm", "foreignPolicy", this.state.values.foreignPolicy)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(6)}</FormLabel>
                            <FormGroup row={true}>
                                {this.getCheckboxForm("languageIReq", "Język", this.state.languageIReq)}
                                {this.getCheckboxForm("eduIReq", "Poziom wykrztałcenia", this.state.eduIReq)}
                                {this.getCheckboxForm("ethnicityIReq", "Grupa etniczna", this.state.ethnicityIReq)}
                                {this.getCheckboxForm("religionIReq", "Religia", this.state.religionIReq)}
                            </FormGroup>
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(7)}</FormLabel>
                            {this.getRadioGroup("Brak praw", "Ustalony limit praw",
                                "Równe prawa", "Równe prawa oraz benefity", "immigrationRights", this.state.values.immigrationRights)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(8)}</FormLabel>

                            {this.getRadioGroup("Tylko media publiczne", "Dopuszczalne media prywatne, z narzuconymi restrykcjami",
                                "Odrębne media puczline oraz prywatne", "Tylko media prywatne", "media", this.state.values.media)}
                        </FormContainer>
                    </FormControl><br/>
                </Typography>
            </div>
        );
    }
}

/*StateView.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

export default StateView;