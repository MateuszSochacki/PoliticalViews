import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Notifications, {notify} from "./Notifications";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);

        this.addToQuestionnaire = this.addToQuestionnaire.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveQuestionnaire = this.saveQuestionnaire.bind(this);

        this.state = {
            values: {
                name: '',
                description: '',
                question: '',
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: '',
                economy1: 0,
                economy2: 0,
                economy3: 0,
                economy4: 0,
                social1: 0,
                social2: 0,
                social3: 0,
                social4: 0
            },

            questionNumber: 1,

            toDto: {
                name: '',
                description: '',
                userId: '',
                questions: [],
            }
        }
    }

    saveQuestionnaire() {

        const dto = this.state.toDto;
        dto.name = this.state.values.name;
        dto.description = this.state.values.description;
        dto.userId = 1;

        const request = new Request('http://localhost:8080/addQuestionnaire', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'manual',
            body: JSON.stringify(dto)
        });
        fetch(request)
            .then(response => {
                if (response.ok) {
                    console.log('questionnaire succesfully created');
                    notify('Test został utworzony', true)
                }
                return response.json();
            }).then(data => {
        }).catch(err => console.error(err));
    };

    handleChange(event) {
        const values = this.state.values;
        values[event.target.name] = event.target.value;
        this.setState({values});
    };

    addToQuestionnaire() {

        const answers = [{
            contents: this.state.values.answer1,
            economy: this.state.values.economy1,
            social: this.state.values.social1
        }, {
            contents: this.state.values.answer2,
            economy: this.state.values.economy2,
            social: this.state.values.social2
        }, {
            contents: this.state.values.answer3,
            economy: this.state.values.economy3,
            social: this.state.values.social3
        }, {
            contents: this.state.values.answer4,
            economy: this.state.values.economy4,
            social: this.state.values.social4
        }];

        const prevToDto = this.state.toDto;

        prevToDto.questions.push({name: this.state.values.question, number: this.state.questionNumber, answers });
        notify('Dodano do testu', true);
        this.setState({toDto: prevToDto, questionNumber: this.state.questionNumber + 1});


        /*this.setState(prevToDto => ({
            questions: [...prevState.toDto.questions,
                {name: this.state.question, number: this.state.questionNumber, answers }],
            questionNumber: this.state.questionNumber + 1
        }))*/
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <form className={classes.container} autoComplete="off" id="myForm">
                    <TextField
                        id="QuestionnaireText"
                        name="name"
                        label="Tytuł:"
                        className={classes.textField}
                        required
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="Description"
                        name="description"
                        label="Opis testu:"
                        className={classes.textField}
                        required
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="QuestionName"
                        name="question"
                        label="Pytanie:"
                        className={classes.textField}
                        required
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="Answer1"
                        name="answer1"
                        label="Odpowiedź:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="EconomyValue1"
                        name="economy1"
                        label="Wartość na osi gospodarczej:"
                        className={classes.textField}
                        required
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="SocialValue1"
                        name="social1"
                        label="Wartość na osi światopoglądowej:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="Answer2"
                        name="answer2"
                        label="Odpowiedź:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="EconomyValue2"
                        name="economy2"
                        label="Wartość na osi gospodarczej:"
                        className={classes.textField}
                        required
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="SocialValue2"
                        name="social2"
                        label="Wartość na osi światopoglądowej:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="Answer3"
                        name="answer3"
                        label="Odpowiedź:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="EconomyValue3"
                        name="economy3"
                        label="Wartość na osi gospodarczej:"
                        className={classes.textField}
                        required
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="SocialValue3"
                        name="social3"
                        label="Wartość na osi światopoglądowej:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="Answer4"
                        name="answer4"
                        label="Odpowiedź:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="EconomyValue4"
                        name="economy4"
                        label="Wartość na osi gospodarczej:"
                        className={classes.textField}
                        required
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="SocialValue4"
                        name="social4"
                        label="Wartość na osi światopoglądowej:"
                        className={classes.textField}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" fullWidth color="secondary" onClick={this.addToQuestionnaire}
                            className={classes.button}>
                        Dodaj do testu
                        {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>}
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>

                    <Button variant="contained" fullWidth color="primary" onClick={this.saveQuestionnaire}
                            className={classes.button}>
                        Zapisz test
                        {<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>}
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>
                </form>
                <Notifications/>
            </div>
        );
    }
}

Questionnaire.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Questionnaire);


