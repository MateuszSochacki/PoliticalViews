import React, {Component} from 'react';
import {FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup,} from '@material-ui/core/';
import Checkbox from "@material-ui/core/Checkbox/";
import Typography from "@material-ui/core/Typography/";
import Button from "@material-ui/core/Button/Button";


function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{ paddingBottom: 40 }}>
            {props.children}
        </Typography>
    );
}

function getQuestion(num) {
    const questions = ["Które z podanych czynników wpływających na środowisko " +
    "powinny być poddane państwowej regulacji?", "Którą z podanych form państwowych uważasz " +
    "za najodpowiedniejszą?", "Jaki z podanych systemów sprawowania władzy popierasz?",
    "Jakie wymagania powinna spełniać osoba chcąca głosować w wyborach?",
    "Czy popierasz obowiązkową służbę wojskową?", "Który z podanych typów " +
    "polityki zagranicznej popierasz (uwzględniając użycie armii)?",
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
        ans3: {text: "Demokracja parlamentarna (pośrednia)", value: [0, -1]},
        ans4: {text: "Demokracja bezpośrednia", value: [0, -2]}
    },
    set4: {
        ans1: {text: "Warunek wiekowy", value: [0, 1]},
        ans2: {text: "Odpowiednie wykształcenie", value: [0, 1]},
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
        ans4: {text: "Ekspansjonizm", value: [0, 2]}
    },
    set7: {
        ans1: {text: "Język", value: [0, 1]},
        ans2: {text: "Poziom wykształcenia", value: [0, 1]},
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
        ans2: {text: "Dopuszczalne media prywatne z narzuconymi restrykcjami", value: [0, 1]},
        ans3: {text: "Odrębne media publiczne oraz prywatne", value: [0, -1]},
        ans4: {text: "Tylko media prywatne", value: [0, -2]}
    }
};

class StateView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {
                autonomy: "0,0",
                zyzdem: "0,0",
                militaryService: "0,0",
                foreignPolicy: "0,0",
                immigrationRights: "0,0",
                media: "0,0"
            },

            checkboxesClimate: {
                airPollutions: false,
                waterPollutions: false,
                landPollutions: false,
                climateChanges: false,
            },
            checkboxesReq: {
                ageReq: false,
                eduReq: false,
                wealthReq: false,
                ethnicityReq: false,
                languageIReq: false,
                eduIReq: false,
                ethnicityIReq: false,
                religionReq: false
            },

            xAxis : 0,
            yAxis : -4,
            buttonValue: 0
        };

        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
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
                    <FormControlLabel value={set.ans1.value.toString()} control={<Radio/>} label={set.ans1.text}/>
                    <FormControlLabel value={set.ans2.value.toString()} control={<Radio/>} label={set.ans2.text}/>
                    <FormControlLabel value={set.ans3.value.toString()} control={<Radio/>} label={set.ans3.text}/>
                    <FormControlLabel value={set.ans4.value.toString()} control={<Radio/>} label={set.ans4.text}/>
                </RadioGroup>
            </div>
        )
    }

    getRadioPair(set, name, groupValue) {

        return (
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <RadioGroup
                    aria-label={name}
                    name={name}
                    value={groupValue}
                    onChange={this.handleChangeRadio}
                    row={true}
                >
                    <FormControlLabel value={set.ans1.value.toString()} control={<Radio/>} label={set.ans1.text}/>
                    <FormControlLabel value={set.ans2.value.toString()} control={<Radio/>} label={set.ans2.text}/>
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
        const values = this.state.values;
        const checksClimate = this.state.checkboxesClimate;
        const checksReq = this.state.checkboxesReq;
        let yAxis = this.state.yAxis;
        let xAxis = this.state.xAxis;

        Object.keys(values).forEach(function(key) {
            xAxis += Number(values[key].split(',')[0]);
            yAxis += Number(values[key].split(',')[1]);
        });
        Object.keys(checksClimate).forEach(function(key) {
            if(checksReq[key]) {
                --xAxis;
                ++yAxis;
            }
        });
        Object.keys(checksReq).forEach(function(key) {
            if(checksReq[key]) ++yAxis;
        });

        this.state.xAxis = xAxis;
        this.state.yAxis = yAxis;
    }

    saveData() {
        const answers = {
            ...this.state.values,
            ...this.state.checkboxesClimate,
            ...this.state.checkboxesReq,
        };
        fetch('http://localhost:8080/api/stateviews',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(answers)
            }).catch(err => console.error(err));
    }

    handleChangeCheck(event) {
        const checkboxesClimate = this.state.checkboxesClimate;
        Object.keys(checkboxesClimate).forEach(function(key) {
            if (key === event.target.value)
                checkboxesClimate[event.target.value] = event.target.checked;
        });
        this.setState({checkboxesClimate});
        const checkboxesReq = this.state.checkboxesReq;
        Object.keys(checkboxesReq).forEach(function(key) {
            if (key === event.target.value)
                checkboxesReq[event.target.value] = event.target.checked;
        });
        this.setState({checkboxesReq});
    };

    handleChangeRadio(event) {
        const values = this.state.values;
        values[event.target.name] = event.target.value;
        this.setState({values});
    }

    handleClick(event) {
        const val = this.state.buttonValue + 1;
        this.setState({buttonValue: val});
        this.updateCoordinates();
        this.props.parentUpdate(this.state.xAxis, this.state.yAxis);
    }

    render() {

        return (

            <div style={{
                paddingTop: '50px'
            }}>
                <Typography align="center">
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(0)}</FormLabel>
                                {this.getCheckboxForm("airPollutions", answers.set1.ans1.text, this.state.checkboxesClimate.airPollutions)}
                                {this.getCheckboxForm("waterPollutions", answers.set1.ans2.text, this.state.checkboxesClimate.waterPollutions)}
                                {this.getCheckboxForm("landPollutions", answers.set1.ans3.text, this.state.checkboxesClimate.landPollutions)}
                                {this.getCheckboxForm("climateChanges", answers.set1.ans4.text, this.state.checkboxesClimate.climateChanges)}
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
                            {this.getRadioGroup(answers.set3, "zyzdem", this.state.values.zyzdem)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(3)}</FormLabel>
                            <FormGroup row={true}>
                                {this.getCheckboxForm("ageReq", answers.set4.ans1.text, this.state.checkboxesReq.ageReq)}
                                {this.getCheckboxForm("eduReq", answers.set4.ans2.text, this.state.checkboxesReq.eduReq)}
                                {this.getCheckboxForm("wealthReq", answers.set4.ans3.text, this.state.checkboxesReq.wealthReq)}
                                {this.getCheckboxForm("ethnicityReq", answers.set4.ans4.text, this.state.checkboxesReq.ethnicityReq)}
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
                                {this.getCheckboxForm("languageIReq", answers.set7.ans1.text, this.state.checkboxesReq.languageIReq)}
                                {this.getCheckboxForm("eduIReq", answers.set7.ans2.text, this.state.checkboxesReq.eduIReq)}
                                {this.getCheckboxForm("ethnicityIReq", answers.set7.ans3.text, this.state.checkboxesReq.ethnicityIReq)}
                                {this.getCheckboxForm("religionReq", answers.set7.ans4.text, this.state.checkboxesReq.religionReq)}
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
                    {this.state.buttonValue < 1 ?
                        <Button variant="contained" size="medium" color="secondary" onClick={this.handleClick}>
                            Zatwierdź odpowiedzi
                        </Button> :
                        <Button variant="contained" size="medium" disabled>
                            Zatwierdź odpowiedzi
                        </Button>
                    }
                </Typography>
            </div>
        );
    }
}

/*StateView.propTypes = {
    classes: PropTypes.object.isRequired,
};*/

export default StateView;