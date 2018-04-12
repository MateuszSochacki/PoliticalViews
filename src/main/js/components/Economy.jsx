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
    "Jak Twoim zdaniem, powinna być rozwiązana kwiestia emerytur?"];
    return (questions[num]);
}

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
            },

            protectTariffs: false,
            protectLicenses: false,
            antiDumping: false,
            exchangeRate: false,
            welfarePoverty: false,
            welfareUnemployed: false,
            welfareMin: false,
            welfarePension: false,

        };
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
                <Typography align="center">
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(0)}</FormLabel>
                            {this.getRadioGroup("Brak podatku", "Podatek pogłówny",
                                "Podatek liniowy", "Podatek progresywny", "incTax", this.state.values.incTax)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(1)}</FormLabel>
                            {this.getRadioGroup("Wszystkich powinny obowiązywać te same zasady", "Dodatkowy podatek na służby publiczne, lub wyższy próg PIT",
                                "Dochód nie powinien przekraczać pewnej kwoty", "Nie powinno być ludzi zbyt bogatych", "rich", this.state.values.rich)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(2)}</FormLabel>
                            {this.getRadioGroup("Brak podatku", "Podatek pogłówny",
                                "Podatek liniowy", "Podatek progresywny", "corpTax", this.state.values.corpTax)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(3)}</FormLabel>
                            {this.getRadioGroup("Brak płacy minimalnej", "Powinna obowiązywać tylko w korporacjach",
                                "Stała płaca minimalna", "Płaca minimalna uzależniona od inflacji", "minWage", this.state.values.minWage)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(4)}</FormLabel>
                            {this.getCheckboxForm("protectTariffs", "Cła na eksport i import", this.state.protectTariffs)}
                            {this.getCheckboxForm("protectLicenses", "Wprowadzenie licencji na importowane produkty", this.state.protectLicenses)}
                            {this.getCheckboxForm("antiDumping", "Zakaz sprzedaży polskich produktów za granicę po niższej cenie", this.state.antiDumping)}
                            {this.getCheckboxForm("exchangeRate", "Kontrola kursu walutowego", this.state.exchangeRate)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(5)}</FormLabel>
                            {this.getRadioGroup("Ziemia nie powinna być obiektem kupna i sprzedaży", "Większość ziem powinna być publiczna",
                                "Tylko niektóre obszary, jak lasy państwowe lub miejsca administracji", "Grunty powinny być wyłącznie własnością prywatną",
                                "ground", this.state.values.ground)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(6)}</FormLabel>
                            {this.getCheckboxForm("welfarePoverty", "Dla ludzi skrajnie biednych", this.state.welfarePoverty)}
                            {this.getCheckboxForm("welfareUnemployed", "Zasiłek dla bezrobotnych", this.state.welfareUnemployed)}
                            {this.getCheckboxForm("welfareMin", "Z powodu zarobków na poziomie minimum krajowego", this.state.welfareMin)}
                            {this.getCheckboxForm("welfarePension", "Jako dodatek do pensji", this.state.welfarePension)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(7)}</FormLabel>
                            {this.getRadioGroup("Brak udziału państwa(pełna prywatyzacja)", "Całkowita prywatyzacja szkolnictwa wyższego",
                                "Szkoły publiczne oraz prywatne", "Brak zezwolenia na szkoły prywatne", "education", this.state.values.education)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(8)}</FormLabel>
                            {this.getRadioGroup("Brak udziału państwa(pełna prywatyzacja)", "Istnieje nieobowiązkowa w składkach publiczna opieka medyczna",
                                "Składki na opieke medyczną są obowiązkowe", "Brak zezwolenia prywatne firmy medyczne", "healthcare", this.state.values.healthcare)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(9)}</FormLabel>
                            {this.getRadioGroup("Nie powinno być jakichkolwiek ograniczeń", "Drobne regulacje antymonopolowe",
                                "Znaczne ograniczenia dla korporacji", "Im więcej kontroli nad prywatnym przedsiebiorstwem, tym lepiej",
                                "monopolies", this.state.values.monopolies)}
                        </FormContainer>
                    </FormControl><br/>
                    <FormControl component="fieldset" required>
                        <FormContainer>
                            <FormLabel component="legend">{getQuestion(10)}</FormLabel>
                            {this.getRadioGroup("Brak publicznego finansowania", "Nieobowiązkowe ubezpieczenia publiczne, oraz prywatne",
                                "Obowiązkowe składki", "Brak zezwolenia na prywatne ubezpieczenia emerytalne", "retirenment", this.state.values.retirenment)}
                        </FormContainer>
                    </FormControl><br/>
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
export default Economy;