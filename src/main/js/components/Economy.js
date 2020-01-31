import React, {Component} from 'react';
import {FormControl, FormControlLabel, FormLabel,} from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox/";
import {Radio, RadioGroup} from '@material-ui/core/';
import Typography from "@material-ui/core/Typography/";
import Button from "@material-ui/core/Button/Button";

function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{paddingBottom: 40}}>
            {props.children}
        </Typography>
    );
}

function getQuestion(num) {
    const questions = ["Jaki typ opodatkowania od osób fizycznych powinien obowiązywać?",
        "Czy uważasz, że osoby bogate powinny zostać dodatkowo opodatkowane?",
        "Jaki typ opodatkowania od przedsiębiorstw powinien obowiązywać?",
        "Jak powinna funkcjonować płaca minimalna?",
        "Czy jakieś z tych opcji powinny zostać zastosowane, aby chronić polską gospodarkę przed interesem zagranicznym?",
        "Jaka część gruntów powinna należeć do państwa?",
        "W jakich sytuacjach powinien być przyznawany zasiłek?",
        "Jaka powinna być rola państwa w sektorze edukacji?",
        "Jaka powinna być rola państwa w sektorze ochrony zdrowia?",
        "Czy w wolnym rynku potrzebne są ograniczenia przeciwko powstawaniu monopoli?",
        "Jak Twoim zdaniem, powinna być rozwiązana kwestia emerytur?",
        "Czy popierasz wpływ związków zawodowych na prywatne przedsiębiorstwa?",
        "Jakie Twoim zdaniem powinna obowiązywać stawka podatku VAT?",
    ];
    return (questions[num]);
}

const answers = {

    set1: {
        ans1: {text: "Brak podatku", value: [2, 0]},
        ans2: {text: "Podatek pogłówny", value: [1, 0]},
        ans3: {text: "Podatek liniowy", value: [-1, 0]},
        ans4: {text: "Podatek progresywny", value: [-2, 0]}
    },
    set2: {
        ans1: {text: "Wszystkich powinny obowiązywać te same zasady", value: [2, 0]},
        ans2: {text: "Dodatkowy podatek na służby publiczne lub wyższy próg PIT", value: [1, 0]},
        ans3: {text: "Dochód nie powinien przekraczać pewnej kwoty", value: [-1, 0]},
        ans4: {text: "Nie powinno być ludzi zbyt bogatych", value: [-2, 0]}
    },
    set3: {
        ans1: {text: "Brak podatku", value: [2, 0]},
        ans2: {text: "Podatek pogłówny", value: [1, 0]},
        ans3: {text: "Podatek liniowy", value: [-1, 0]},
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
        ans1: {text: "Brak udziału państwa (pełna prywatyzacja)", value: [2, 0]},
        ans2: {text: "Całkowita prywatyzacja szkolnictwa wyższego", value: [1, 0]},
        ans3: {text: "Szkoły publiczne oraz prywatne", value: [-1, 0]},
        ans4: {text: "Brak zezwolenia na szkoły prywatne", value: [-2, 0]}
    },
    set9: {
        ans1: {text: "Brak udziału państwa (pełna prywatyzacja)", value: [2, 0]},
        ans2: {text: "Istnieje nieobowiązkowa w składkach publiczna opieka medyczna", value: [1, 0]},
        ans3: {text: "Składki na opiekę medyczną są obowiązkowe", value: [-1, 0]},
        ans4: {text: "Brak zezwolenia prywatne firmy opieki zdrowotnej", value: [-2, 0]}
    },
    set10: {
        ans1: {text: "Nie powinny istnieć jakiekolwiek ograniczenia", value: [2, 0]},
        ans2: {text: "Drobne regulacje antymonopolowe", value: [1, 0]},
        ans3: {text: "Znaczne ograniczenia dla korporacji", value: [-1, 0]},
        ans4: {text: "Im więcej kontroli nad prywatnym przedsiębiorstwem, tym lepiej", value: [-2, 0]}
    },
    set11: {
        ans1: {text: "Brak publicznego finansowania", value: [2, 0]},
        ans2: {text: "Nieobowiązkowe ubezpieczenia publiczne oraz prywatne", value: [1, 0]},
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

class Economy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            values: {
                rich: "0,0",
                minWage: "0,0",
                corpTax: "0,0",
                incTax: "0,0",
                ground: "0,0",
                education: "0,0",
                healthcare: "0,0",
                monopolies: "0,0",
                retirenment: "0,0",
                tradeUnions: "0,0",
                vat: "0,0"
            },

            checkboxes: {
                protectTariffs: false,
                protectLicenses: false,
                antiDumping: false,
                exchangeRate: false,
                welfarePoverty: false,
                welfareUnemployed: false,
                welfareMin: false,
                welfarePension: false
            },
            xAxis: 4,
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

    getRadioPair(set, name, groupValue) {

        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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

    saveData() {
        let userId = sessionStorage.getItem('id');
        if(userId === null) userId = 0;
        const answers = {
            ...this.state.values,
            ...this.state.checkboxes,
            userId
        };
        fetch('http://localhost:8080/addEconomy',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(answers)
            }).catch(err => console.error(err));
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.saveData();
    }

    updateCoordinates() {
        const values = this.state.values;
        const checks = this.state.checkboxes;
        let xAxis = this.state.xAxis;

        Object.keys(values).forEach(function (key) {
            xAxis += Number(values[key].split(',')[0]);
        });
        Object.keys(checks).forEach(function (key) {
            if (checks[key]) --xAxis;
        });
        this.state.xAxis = xAxis;
    }

    handleChangeCheck(event) {

        const checkboxes = this.state.checkboxes;
        checkboxes[event.target.value] = event.target.checked;
        this.setState({checkboxes});
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
        this.props.parentUpdate(this.state.xAxis, 0);
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
                            {this.getCheckboxForm("protectTariffs", answers.set5.ans1.text, this.state.checkboxes.protectTariffs)}
                            {this.getCheckboxForm("protectLicenses", answers.set5.ans2.text, this.state.checkboxes.protectLicenses)}
                            {this.getCheckboxForm("antiDumping", answers.set5.ans3.text, this.state.checkboxes.antiDumping)}
                            {this.getCheckboxForm("exchangeRate", answers.set5.ans4.text, this.state.checkboxes.exchangeRate)}
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
                            {this.getCheckboxForm("welfarePoverty", answers.set7.ans1.text, this.state.checkboxes.welfarePoverty)}
                            {this.getCheckboxForm("welfareUnemployed", answers.set7.ans2.text, this.state.checkboxes.welfareUnemployed)}
                            {this.getCheckboxForm("welfareMin", answers.set7.ans3.text, this.state.checkboxes.welfareMin)}
                            {this.getCheckboxForm("welfarePension", answers.set7.ans4.text, this.state.checkboxes.welfarePension)}
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

export default Economy;