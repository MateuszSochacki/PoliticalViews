import React, {Component} from 'react';
import {FormControl, FormControlLabel, FormLabel} from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox/";
import {Radio, RadioGroup} from '@material-ui/core/';
import Typography from "@material-ui/core/Typography/";
import Button from "@material-ui/core/Button/Button";

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
    const questions = ["Jak duży wpływ powinna mieć religia na władzę?",
    "Jakie prawa oraz zasady powinny obejmować osoby płci żeńskiej w państwie?",
    "Czy jesteś za stosowaniem kary śmierci, jeśli tak to w jakich okolicznościach?",
    "Które z podanych substancji powinny być legalne na rynku handlowym?",
    "Jak duży zakres praw powinny mieć osoby innej orientacji niż heteroseksualna?",
    "W jakich przypadkach aborcja powinna być możliwa do wykonania?",
    "W jakich przypadkach eutanazja powinna być możliwa do wykonania?",
    "Jakie regulacje powinny obowiązywać w kwestii posiadania broni palnej?"];

    return (questions[num]);
}
const answers = {

    set1: {
        ans1: {text: "Duży (państwo wyznaniowe)", value: [0, 2]},
        ans2: {text: "Średni (kultura oparta o religię)", value: [0, 1]},
        ans3: {text: "Mniejszy (pomniejsze dotacje z publicznego budżetu)", value: [0, -1]},
        ans4: {text: "Żaden (całkowity rozdział)", value: [0, -2]}
    },
    set2: {
        ans1: {text: "Równe prawa do edukacji", value: [0, -1]},
        ans2: {text: "Równe prawa do zatrudnienia", value: [0, -1]},
        ans3: {text: "Prawo do głosowania", value: [0, -1]},
        ans4: {text: "Regulowany brak różnic w wynagrodzeniu", value: [0, -1]},
        ans5: {text: "Urlop macierzyński", value: [0, -1]}
    },
    set3: {
        ans1: {text: "Brak kary śmierci", value: [0, -2]},
        ans2: {text: "Kara śmierci w szczególnych przypadkach", value: [0, -1]},
        ans3: {text: "Kara śmierci za cięższe przewinienia", value: [0, 1]},
        ans4: {text: "Powszechna kara śmierci", value: [0, 2]}
    },
    set4: {
        ans1: {text: "Alkohol", value: [0, -1]},
        ans2: {text: "Nikotyna", value: [0, -1]},
        ans3: {text: "Marihuana", value: [0, -1]},
        ans4: {text: "Narkotyki twarde i psychodeliki", value: [0, -1]}
    },
    set5: {
        ans1: {text: "Inne orientacje powinny być zwalczane", value: [0, 2]},
        ans2: {text: "Brak równouprawnienia", value: [0, 1]},
        ans3: {text: "Związki partnerskie", value: [0, -1]},
        ans4: {text: "Związki partnerskie oraz prawo do adopcji", value: [0, -2]}
    },
    set6: {
        ans1: {text: "W każdym przypadku (brak kontroli)", value: [0, -2]},
        ans2: {text: "W przypadkach z kompromisu aborcyjnego", value: [0, -1]},
        ans3: {text: "Prawo powinno zostać zaostrzone", value: [0, 1]},
        ans4: {text: "Aborcja powinna być nielegalna", value: [0, 2]}
    },
    set7: {
        ans1: {text: "W każdym przypadku (brak kontroli)", value: [0, -2]},
        ans2: {text: "W przypadku chronicznego bólu", value: [0, -1]},
        ans3: {text: "W przypadku chorób nieuleczalnych", value: [0, 1]},
        ans4: {text: "Eutanazja powinna być nielegalna", value: [0, 2]}
    },
    set8: {
        ans1: {text: "Brak regulacji", value: [0, -2]},
        ans2: {text: "Stabilność psychiczna oraz brak przeszłości kryminalnej", value: [0, -1]},
        ans3: {text: "Licencja poparta testami", value: [0, 1]},
        ans4: {text: "Brak prawa do posiadania", value: [0, 2]}
    }
};

class SocialView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values : {
                religion : "0,0",
                deathPenalty : "0,0",
                orientation : "0,0",
                abortion : "0,0",
                euthanasia : "0,0",
                race : "0,0"
            },

            checkboxes: {
                womenEdu: false,
                womenEmploy: false,
                womenVoting: false,
                womenWage: false,
                womenMaternity: false,
                stimAlcohol: false,
                stimCannabis: false,
                stimHard: false,
                stimNicotine: false
            },
            coordinates: {
                xAxis: 0,
                yAxis: 5
            },
            buttonValue: 0
        };

        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        const values = this.state.values;
        const checkboxes = this.state.checkboxes;
        const answers = {
            ...values,
            ...checkboxes
        };
        fetch('http://localhost:8080/addSocialView',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(answers)
            }).catch(err => console.error(err));
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.saveData();
    }

    updateCoordinatesToSave() {
        const values = this.state.coordinates;
        values.yAxis  = this.state.coordinates.yAxis + this.state.yAxis;
        this.setState({coordinates: values});
    }

    updateCoordinates() {
        const values = this.state.values;
        const checks = this.state.checkboxes;
        let yAxis = this.state.coordinates.yAxis;

        Object.keys(values).forEach(function(key) {
            yAxis += Number(values[key].split(',')[1]);
        });
        Object.keys(checks).forEach(function(key) {
            if(checks[key]) --yAxis;
        });
        let coordinates = this.state.coordinates;
        coordinates.yAxis += yAxis;
        this.state.coordinates.xAxis = 0;
        this.state.coordinates.yAxis = yAxis;
    }

    handleClick(event) {
        const val = this.state.buttonValue + 1;
        this.setState({buttonValue: val});
        this.updateCoordinates();
        this.props.parentUpdate(this.state.coordinates.xAxis, this.state.coordinates.yAxis);
    }

    handleChangeCheck(event) {
        const checkboxes = this.state.checkboxes;
        checkboxes[event.target.value] = event.target.checked;
        this.setState({checkboxes});
    };

    handleChangeRadio(event) {
        const values = this.state.values;
        values[event.target.name] = event.target.value;
        //this.updateCoordinatesFromRadio(event.target.value);
        this.setState({values});
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
                            {this.getRadioGroup(answers.set1, "religion", this.state.values.religion)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                            {this.getCheckboxForm("womenEdu", answers.set2.ans1.text, this.state.womenEdu)}
                            {this.getCheckboxForm("womenEmploy", answers.set2.ans2.text, this.state.womenEmploy)}
                            {this.getCheckboxForm("womenVoting", answers.set2.ans3.text, this.state.womenVoting)}
                            {this.getCheckboxForm("womenWage", answers.set2.ans4.text, this.state.womenWage)}
                            {this.getCheckboxForm("womenMaternity", answers.set2.ans5.text, this.state.womenMaternity)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(2)}</FormLabel>
                            {this.getRadioGroup(answers.set3, "deathPenalty", this.state.values.deathPenalty)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(3)}</FormLabel>
                            {this.getCheckboxForm("stimAlcohol", answers.set4.ans1.text, this.state.stimAlcohol)}
                            {this.getCheckboxForm("sitmNicotine", answers.set4.ans2.text, this.state.sitmNicotine)}
                            {this.getCheckboxForm("stimCannabis", answers.set4.ans3.text, this.state.stimCannabis)}
                            {this.getCheckboxForm("stimHard", answers.set4.ans4.text, this.state.stimHard)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(4)}</FormLabel>
                            {this.getRadioGroup(answers.set5, "orientation", this.state.values.orientation)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(5)}</FormLabel>
                            {this.getRadioGroup(answers.set6, "abortion", this.state.values.abortion)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(6)}</FormLabel>
                            {this.getRadioGroup(answers.set7, "euthanasia", this.state.values.euthanasia)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(7)}</FormLabel>
                            {this.getRadioGroup(answers.set8, "race", this.state.values.race)}
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
export default SocialView;