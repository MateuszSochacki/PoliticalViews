import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Forward from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button/Button";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import CustomChart from "./CustomChart";
import {Link} from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{paddingBottom: 40}}>
            {props.children}
        </Typography>
    );
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class GeneratedTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionnaire: {
                questionnaireId: '',
                name: '',
                description: '',
                questions: []
            },
            radioItems: {},
            response: {
                economy: 2,
                social: 2
            },
            responseState: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.assignValue = this.assignValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const {toGenerate} = this.props.location.state;
        const id = toGenerate.questionnaireId;

        const request = new Request('http://localhost:8080/findQuestionnaire?id='.concat(id), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'manual',
        });
        const response = await fetch(request);
        const questionnaire = await response.json();
        const radioItems = {
            'question0': ''
        };
        for (let i = 1; i < questionnaire.questions.length; ++i) {
            radioItems['question'.concat(i.toString())] = '';
        }

        this.setState({questionnaire, radioItems});
    }

    handleChange(event) {
        const radioItems = this.state.radioItems;
        radioItems[event.target.name] = event.target.value;
        this.setState({radioItems});
    }

    assignValue(answer) {
        return answer.economy.toString().concat(',').concat(answer.social);
    }

    async handleSubmit() {

        const dto = {answerValues: Object.values((this.state.radioItems))};


        const request = new Request('http://localhost:8080/computeCoordinates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'manual',
            body: JSON.stringify(dto)
        });

        const data = await fetch(request);
        const response = await data.json();
        this.setState({response, responseState: data.ok})
    }

    render() {
        const {name, description, questions} = this.state.questionnaire;
        const {responseState} = this.state;
        const {classes} = this.props;
        let i = -1;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {name}
                        </Typography>
                        <Link to="/">
                            <Button variant="contained" color="secondary">
                                Wróć
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                {responseState && <CustomChart xAxis={this.state.response.economy}
                                               yAxis={this.state.response.social}/>}
                {!responseState &&
                <Typography align="center">
                    <h3>{description}</h3>
                    {questions.map(question => {
                        ++i;
                        return (
                            <div>
                                <FormControl component="fieldset" required>
                                    <FormContainer>
                                        <FormLabel component="legend">
                                            <Typography variant="h6" gutterBottom>
                                                {question.name}
                                            </Typography>
                                        </FormLabel>
                                        <RadioGroup
                                            aria-label={'question'.concat(i.toString())}
                                            name={'question'.concat(i.toString())}
                                            value={this.state.radioItems['question'.concat(i.toString())]}
                                            onChange={this.handleChange}
                                            row={true}
                                        >
                                            <FormControlLabel value={this.assignValue(question.answers[0])}
                                                              control={<Radio/>}
                                                              label={question.answers[0].contents}/>
                                            <FormControlLabel value={this.assignValue(question.answers[1])}
                                                              control={<Radio/>}
                                                              label={question.answers[1].contents}/>
                                            <FormControlLabel value={this.assignValue(question.answers[2])}
                                                              control={<Radio/>}
                                                              label={question.answers[2].contents}/>
                                            <FormControlLabel value={this.assignValue(question.answers[3])}
                                                              control={<Radio/>}
                                                              label={question.answers[3].contents}/>
                                        </RadioGroup>
                                    </FormContainer>
                                </FormControl><br/>
                            </div>
                        );
                    })}
                    <Button variant="contained" size="medium" color="secondary" onClick={this.handleSubmit}>
                        Pokaż wyniki
                    </Button>
                </Typography>
                }
            </div>
        );
    }
}

GeneratedTest.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(GeneratedTest);