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

const answers = {

    set1: {
        ans1: {text: "Zanieczyszczenia powietrza", value: [-1, 1]},
        ans2: {text: "Zanieczyszczenia wodne", value: [-1, 1]},
        ans3: {text: "Zanieczyszczenia gleby", value: [-1, 1]},
        ans4: {text: "Zmiany klimatu", value: [-1, 1]}
    },
    set2: {
        ans1: {text: "Państwo unitarne", value: [0, 2]},
        ans2: {text: "Federacja", value: [0, 1]},
        ans3: {text: "Konfederacja", value: [0, -1]},
        ans4: {text: "Unia", value: [0, -2]}
    },
    set3: {
        ans1: {text: "Rządy autorytarne", value: [0, 2]},
        ans2: {text: "Ustrój jednopartyjny", value: [0, 1]},
        ans3: {text: "demokracja parlamentarna(pośrednia)", value: [0, -1]},
        ans4: {text: "Demokracja bezpośrednia", value: [0, -2]}
    },
    set4: {
        ans1: {text: "Warunek wiekowy", value: [0, 1]},
        ans2: {text: "Odpowiednie wykrztałcenie", value: [0, 1]},
        ans3: {text: "Odpowiednia majętność", value: [0, 1]},
        ans4: {text: "Przynależność do grupy etnicznej", value: [0, 1]}
    },
    set5: {
        ans1: {text: "Popieram", value: [0, 1]},
        ans2: {text: "Nie popieram", value: [0, -1]}
},
    set6: {
        ans1: {text: "Izolacjonizm", value: [0, -2]},
        ans2: {text: "Neutralność", value: [0, -1]},
        ans3: {text: "Interwencjonizm", value: [0, 1]},
        ans4: {text: "Ekpsansjonizm", value: [2, 0]}
    },
    set7: {
        ans1: {text: "Język", value: [0, 1]},
        ans2: {text: "Poziom wykrztałcenia", value: [0, 1]},
        ans3: {text: "Grupa etniczna", value: [0, 1]},
        ans4: {text: "Religia", value: [0, 1]}
    },
    set8: {
        ans1: {text: "Brak praw", value: [0, 2]},
        ans2: {text: "Ustalony limit praw", value: [0, 1]},
        ans3: {text: "Równe prawa", value: [0, -1]},
        ans4: {text: "Równe prawa oraz benefity", value: [0, -2]}
    },
    set9: {
        ans1: {text: "Tylko media publiczne", value: [0, 2]},
        ans2: {text: "Dopuszczalne media prywatne, z narzuconymi restrykcjami", value: [0, 1]},
        ans3: {text: "Odrębne media puczline oraz prywatne", value: [0, -1]},
        ans4: {text: "Tylko media prywatne", value: [0, -2]}
    }
};
/*function getHighValueAnswerAdd(value) {

    const answers = [];

    if (value === "all")
        return answers;
    else return (answers[value]);
}
function getMidValueAnswerAdd(value) {

    const answers = [];

    if (value === "all")
        return answers;
    else return (answers[value]);
}
function getHighValueAnswerSub(value) {

    const answers = [];

    if (value === "all")
        return answers;
    else return (answers[value]);
}
function getMidValueAnswerSub(value) {

    const answers = [];

    if (value === "all")
        return answers;
    else return (answers[value]);
}
function getCheckAnswerAdd(value) {

}*/

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
            answers : [
                [
                    {text: "Zanieczyszczenia powietrza", value: [-1, 1]},
                    {text: "Zanieczyszczenia wodne", value: [-1, 1]},
                    {text: "Zanieczyszczenia gleby", value: [-1, 1]},
                    {text: "Zmiany klimatu", value: [-1, 1]}
                ],
                [
                    {text: "Państwo unitarne", value: [0, 2]},
                    {text: "Federacja", value: [0, 1]},
                    {text: "Konfederacja", value: [0, -1]},
                    {text: "Unia", value: [0, -2]}
                ],
                [
                    {text: "Rządy autorytarne", value: [0, 2]},
                    {text: "Ustrój jednopartyjny", value: [0, 1]},
                    {text: "demokracja parlamentarna(pośrednia)", value: [0, -1]},
                    {text: "Demokracja bezpośrednia", value: [0, -2]}
                ],
                [
                    {text: "Warunek wiekowy", value: [0, 1]},
                    {text: "Odpowiednie wykrztałcenie", value: [0, 1]},
                    {text: "Odpowiednia majętność", value: [0, 1]},
                    {text: "Przynależność do grupy etnicznej", value: [0, 1]}
                ],
                [
                    {text: "Popieram", value: [0, 1]},
                    {text: "Nie popieram", value: [0, -1]}
                ],
                [
                    {text: "Izolacjonizm", value: [0, -2]},
                    {text: "Neutralność", value: [0, -1]},
                    {text: "Interwencjonizm", value: [0, 1]},
                    {text: "Ekpsansjonizm", value: [2, 0]}
                ],
                [
                    {text: "Język", value: [0, 1]},
                    {text: "Poziom wykrztałcenia", value: [0, 1]},
                    {text: "Grupa etniczna", value: [0, 1]},
                    {text: "Religia", value: [0, 1]}
                ],
                [
                    {text: "Brak praw", value: [0, 2]},
                    {text: "Ustalony limit praw", value: [0, 1]},
                    {text: "Równe prawa", value: [0, -1]},
                    {text: "Równe prawa oraz benefity", value: [0, -2]}
                ],
               [
                   {text: "Tylko media publiczne", value: [0, 2]},
                   {text: "Dopuszczalne media prywatne, z narzuconymi restrykcjami", value: [0, 1]},
                   {text: "Odrębne media puczline oraz prywatne", value: [0, -1]},
                   {text: "Tylko media prywatne", value: [0, -2]}
                ]
            ],

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
        this.updateCoordinates();
        this.saveData();
    }

    getRadioGroup(set, name, groupValue) {

        return (
            <div>
                <RadioGroup
                    aria-label={name}
                    name={name}
                    value={groupValue}
                    onChange={this.handleChangeRadio}
                    row={true}
                >
                    <FormControlLabel value={set.ans1.text} control={<Radio/>} label={set.ans1.text}/>
                    <FormControlLabel value={set.ans2.text} control={<Radio/>} label={set.ans2.text}/>
                    <FormControlLabel value={set.ans3.text} control={<Radio/>} label={set.ans3.text}/>
                    <FormControlLabel value={set.ans4.text} control={<Radio/>} label={set.ans4.text}/>
                </RadioGroup>
            </div>
        )
    }

    getRadioPair(set, name, groupValue) {

        return (
            <div>
                <RadioGroup
                    aria-label={name}
                    name={name}
                    value={groupValue}
                    onChange={this.handleChangeRadio}
                    row={true}
                >
                    <FormControlLabel value={set.ans1.text} control={<Radio/>} label={set.ans1.text}/>
                    <FormControlLabel value={set.ans2.text} control={<Radio/>} label={set.ans2.text}/>
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

        const values = Array.from(this.state.values);

        this.state.answers.map((set) =>
            set.map((ans) => values.forEach((value) => {
                    if (value === ans.text) {
                        this.state.coordiantes.updateX(ans.value[0]);
                        this.state.coordiantes.updateY(ans.value[1]);
                    }
                })
            )
        )
    }

    updateCoordinatesFromCheck(value) {

    }

    updateCoordinatesFromRadio(value) {
        const coords = this.state.coordinates;
        /*if(getHighValueAnswerAdd("all").includes(value))
            coords.updateY(2);
        else if (getMidValueAnswerAdd("all").includes(value))
            coords.updateY(1);
        else if (getMidValueAnswerSub("all").includes(value))
            coords.updateY(-1);
        else if (getHighValueAnswerSub("all").includes(value))
            coords.updateY(-2);*/

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
        //this.updateCoordinatesFromCheck(event.target.label);
        this.setState({[event.target.value]: event.target.checked});
    };

    handleChangeRadio(event) {
        const values = this.state.values;
        values[event.target.name] = event.target.value;
        //this.updateCoordinatesFromRadio(event.target.value);
        this.setState({values});
    }

    render() {

        return (

            <div>
                <Typography align="center">
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(0)}</FormLabel>
                                {this.getCheckboxForm("airPollutions", answers.set1.ans1.text, this.state.airPollutions)}
                                {this.getCheckboxForm("waterPollutions", answers.set1.ans2.text, this.state.waterPollutions)}
                                {this.getCheckboxForm("landPollutions", answers.set1.ans3.text, this.state.landPollutions)}
                                {this.getCheckboxForm("climateChanges", answers.set1.ans4.text, this.state.climateChanges)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                            {this.getRadioGroup(answers.set2, "autonomy", this.state.values.autonomy)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(2)}</FormLabel>
                            {this.getRadioGroup(answers.set3, "system", this.state.values.system)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(3)}</FormLabel>
                            <FormGroup row={true}>
                                {this.getCheckboxForm("ageReq", answers.set4.ans1.text, this.state.ageReq)}
                                {this.getCheckboxForm("eduReq", answers.set4.ans2.text, this.state.eduReq)}
                                {this.getCheckboxForm("wealthReq", answers.set4.ans3.text, this.state.wealthReq)}
                                {this.getCheckboxForm("ethnicityReq", answers.set4.ans4.text, this.state.ethnicityReq)}
                            </FormGroup>
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(4)}</FormLabel>
                            {this.getRadioPair(answers.set5, "militaryService", this.state.values.militaryService)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(5)}</FormLabel>
                            {this.getRadioGroup(answers.set6, "foreignPolicy", this.state.values.foreignPolicy)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(6)}</FormLabel>
                            <FormGroup row={true}>
                                {this.getCheckboxForm("languageIReq", answers.set7.ans1.text, this.state.languageIReq)}
                                {this.getCheckboxForm("eduIReq", answers.set7.ans2.text, this.state.eduIReq)}
                                {this.getCheckboxForm("ethnicityIReq", answers.set7.ans3.text, this.state.ethnicityIReq)}
                                {this.getCheckboxForm("religionIReq", answers.set7.ans4.text, this.state.religionIReq)}
                            </FormGroup>
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(7)}</FormLabel>
                            {this.getRadioGroup(answers.set8, "immigrationRights", this.state.values.immigrationRights)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(8)}</FormLabel>
                            {this.getRadioGroup(answers.set9, "media", this.state.values.media)}
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