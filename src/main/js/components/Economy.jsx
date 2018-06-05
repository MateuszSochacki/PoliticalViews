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
import {Checkbox} from "material-ui";

function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{ paddingBottom: 40 }}>
            {props.children}
        </Typography>
    );
}

function getQuestion(num) {
    const questions = ["Jaki typ opodatkowania od osób fizycznych powinień obowiązywać?",
    "Czy uważasz, że osoby bogate powinny zostać dodatkowo opodatkowane?",
    "Jaki typ opodatkowania od przedsiębiorstw powinień obowiązywać?",
    "Jak powinna funkcjonować płaca minimalna?",
    "Czy jakieś z tych opcji powinny zostać zastosowane, aby chronić polską gospodarkę, przed interesem zagranicznym?",
    "Jaka część gruntów powinna należeć do państwa?",
    "W jakich sytuacjach powinien być przyznawany zasiłek?",
    "Jaka powinan być rola państwa w sektorze edukacji?",
    "Jaka powinna być rola państwa w sektorze ochrony zdrowia?",
    "Czy w wolnym rynku potrzebne są ograniczenia przeciwko powstawaniu monopoli?",
    "Jak Twoim zdaniem, powinna być rozwiązana kwiestia emerytur?",
    "Czy popierasz wpływ związków zawodowych na prywatne przedsiębiorstwa?",
    "Jakie Twoim zdaniem powinna opowiązywać stawka podatku VAT?",
    ];
    return (questions[num]);
}
const answers = {

    set1: {
        ans1: {text: "Brak podatku", value: [2, 0]},
        ans2: {text: "Podatek pogłówny", value: [1, 0]},
        ans3: {text: "Podatek liniowy", value: [0, 0]},
        ans4: {text: "Podatek progresywny", value: [-2, 0]}
    },
    set2: {
        ans1: {text: "Wszystkich powinny obowiązywać te same zasady", value: [2, 0]},
        ans2: {text: "Dodatkowy podatek na służby publiczne, lub wyższy próg PIT", value: [0, 0]},
        ans3: {text: "Dochód nie powinien przekraczać pewnej kwoty", value: [-1, 0]},
        ans4: {text: "Nie powinno być ludzi zbyt bogatych", value: [-2, 0]}
    },
    set3: {
        ans1: {text: "Brak podatku", value: [2, 0]},
        ans2: {text: "Podatek pogłówny", value: [1, 0]},
        ans3: {text: "Podatek liniowy", value: [0, 0]},
        ans4: {text: "Podatek progresywny", value: [-2, 0]}
    },
    set4: {
        ans1: {text: "Brak płacy minimalnej", value: [2, 0]},
        ans2: {text: "Powinna obowiązywać tylko w korporacjach", value: [1, 0]},
        ans3: {text: "Stała płaca minimalna", value: [-1, 0]},
        ans4: {text: "Płaca minimalna uzależniona od inflacji", value: [-2, 0]}
    },
    set5: {
        ans1: {text: "Cła na eksport i import", value: [-1, 0]},
        ans2: {text: "Wprowadzenie licencji na importowane produkty", value: [-1, 0]},
        ans3: {text: "Zakaz sprzedaży polskich produktów za granicę po niższej cenie", value: [-1, 0]},
        ans4: {text: "Kontrola kursu walutowego", value: [-1, 0]}
    },
    set6: {
        ans1: {text: "Ziemia nie powinna być obiektem kupna i sprzedaży", value: [-2, 0]},
        ans2: {text: "Większość ziem powinna być publiczna", value: [-1, 0]},
        ans3: {text: "Tylko niektóre obszary, jak lasy państwowe lub miejsca administracji", value: [1, 0]},
        ans4: {text: "Grunty powinny być wyłącznie własnością prywatną", value: [2, 0]}
    },
    set7: {
        ans1: {text: "Dla ludzi skrajnie biednych", value: [-1, 0]},
        ans2: {text: "Zasiłek dla bezrobotnych", value: [-1, 0]},
        ans3: {text: "Z przyczyny zarobków na poziomie minimum krajowego", value: [-1, 0]},
        ans4: {text: "Jako dodatek do pensji", value: [-1, 0]}
    },
    set8: {
        ans1: {text: "Brak udziału państwa(pełna prywatyzacja)", value: [2, 0]},
        ans2: {text: "Całkowita prywatyzacja szkolnictwa wyższego", value: [1, 0]},
        ans3: {text: "Szkoły publiczne oraz prywatne", value: [-1, 0]},
        ans4: {text: "Brak zezwolenia na szkoły prywatne", value: [-2, 0]}
    },
    set9: {
        ans1: {text: "Brak udziału państwa(pełna prywatyzacja)", value: [2, 0]},
        ans2: {text: "Istnieje nieobowiązkowa w składkach publiczna opieka medyczna", value: [1, 0]},
        ans3: {text: "Składki na opieke medyczną są obowiązkowe", value: [-1, 0]},
        ans4: {text: "Brak zezwolenia prywatne firmy opiekii zdrowotnej", value: [-2, 0]}
    },
    set10: {
        ans1: {text: "Nie powinny istnieć jakiekolwiek ograniczenia", value: [2, 0]},
        ans2: {text: "Drobne regulacje antymonopolowe", value: [1, 0]},
        ans3: {text: "Znaczne ograniczenia dla korporacji", value: [-1, 0]},
        ans4: {text: "Im więcej kontroli nad prywatnym przedsiebiorstwem, tym lepiej", value: [-2, 0]}
    },
    set11: {
        ans1: {text: "Brak publicznego finansowania", value: [2, 0]},
        ans2: {text: "Nieobowiązkowe ubezpieczenia publiczne, oraz prywatne", value: [1, 0]},
        ans3: {text: "Obowiązkowe składki", value: [-1, 0]},
        ans4: {text: "Brak zezwolenia na prywatne ubezpieczenia emerytalne", value: [-2, 0]}
    },
    set12: {
        ans1: {text: "Popieram", value: [-1, 0]},
        ans2: {text: "Nie popieram", value: [1, 0]},
    },
    set13: {
        ans1: {text: "Od 0% do 10%", value: [2, 0]},
        ans2: {text: "Od 10% do 20%", value: [1, 0]},
        ans3: {text: "Od 20% do 30%", value: [-1, 0]},
        ans4: {text: "Powyżej 30%", value: [-2, 0]}
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
function getCheckAnswerSub(value) {

}*/

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
                vat : ""
            },

            protectTariffs: false,
            protectLicenses: false,
            antiDumping: false,
            exchangeRate: false,
            welfarePoverty: false,
            welfareUnemployed: false,
            welfareMin: false,
            welfarePension: false,

            coordinates: props.coordinates
        };
        this.handleChangeCheck = this.handleChangeCheck.bind(this);
        this.handleChangeRadio = this.handleChangeRadio.bind(this);
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

    updateCoordinatesFromCheck() {

    }

    updateCoordinatesFromRadio() {
        const coords = this.state.coordinates;
        /*if(getHighValueAnswerAdd("all").includes(value))
            coords.updateX(2);
        else if (getMidValueAnswerAdd("all").includes(value))
            coords.updateX(1);
        else if (getMidValueAnswerSub("all").includes(value))
            coords.updateX(-1);
        else if (getHighValueAnswerSub("all").includes(value))
            coords.updateX(-2);*/
    }

    handleChangeCheck(event) {

        /*value = (value !== true);*/
        //this.updateCoordinatesFromCheck(event.target.label);
        this.setState({[event.target.value] : event.target.checked});
    };

    handleChangeRadio(event) {
        const values = this.state.values;
        values[event.target.name] = event.target.value;
        //this.updateCoordinatesFromRadio(event.target.value);
        this.setState({values});
    }

    render() {

        return(
            <div>
                <Typography align="center">
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(0)}</FormLabel>
                            {this.getRadioGroup(answers.set1, "incTax", this.state.values.incTax)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                            {this.getRadioGroup(answers.set2, "rich", this.state.values.rich)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(2)}</FormLabel>
                            {this.getRadioGroup(answers.set3, "corpTax", this.state.values.corpTax)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(3)}</FormLabel>
                            {this.getRadioGroup(answers.set4, "minWage", this.state.values.minWage)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(4)}</FormLabel>
                            {this.getCheckboxForm("protectTariffs", answers.set5.ans1.text, this.state.protectTariffs)}
                            {this.getCheckboxForm("protectLicenses", answers.set5.ans2.text, this.state.protectLicenses)}
                            {this.getCheckboxForm("antiDumping", answers.set5.ans3.text, this.state.antiDumping)}
                            {this.getCheckboxForm("exchangeRate", answers.set5.ans4.text, this.state.exchangeRate)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(5)}</FormLabel>
                            {this.getRadioGroup(answers.set6, "ground", this.state.values.ground)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(6)}</FormLabel>
                            {this.getCheckboxForm("welfarePoverty", answers.set6.ans1.text, this.state.welfarePoverty)}
                            {this.getCheckboxForm("welfareUnemployed", answers.set7.ans2.text, this.state.welfareUnemployed)}
                            {this.getCheckboxForm("welfareMin", answers.set7.ans3.text, this.state.welfareMin)}
                            {this.getCheckboxForm("welfarePension", answers.set7.ans4.text, this.state.welfarePension)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(7)}</FormLabel>
                            {this.getRadioGroup(answers.set8, "education", this.state.values.education)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(8)}</FormLabel>
                            {this.getRadioGroup(answers.set9, "healthcare", this.state.values.healthcare)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(9)}</FormLabel>
                            {this.getRadioGroup(answers.set10, "monopolies", this.state.values.monopolies)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(10)}</FormLabel>
                            {this.getRadioGroup(answers.set11, "retirenment", this.state.values.retirenment)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(11)}</FormLabel>
                            {this.getRadioPair(answers.set12, "tradeUnions", this.state.values.tradeUnions)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(12)}</FormLabel>
                            {this.getRadioGroup(answers.set13, "vat", this.state.values.vat)}
                        </FormContainer>
                    </FormControl><br/>
                </Typography>
            </div>
        );
    }
}
export default Economy;