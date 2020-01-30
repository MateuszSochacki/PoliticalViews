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

function FormContainer(props) {
    return (
        <Typography align="center" component="div" style={{paddingBottom: 40}}>
            {props.children}
        </Typography>
    );
}

class GeneratedTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questionnaire: {
                questionnaireId:'',
                name:'',
                description:'',
                questions:[]
            },
            radioItems: {},
            response: {
                economy : 2,
                social : 2
            },
            responseState: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.assignValue = this.assignValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const { toGenerate } = this.props.location.state;
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
            'question0' : ''
        };
        for (let i = 1; i < questionnaire.questions.length; ++i) {
            radioItems['question'.concat(i.toString())] = '';
        }

        this.setState({ questionnaire, radioItems });
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

        const dto =  {answerValues: Object.values((this.state.radioItems))};


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
        let i = -1;

        return (
            <div style={{
                paddingTop: '50px'
            }}>
                <Link to="/">
                    <Button variant="contained" color="primary" className="button">
                        Wróć
                    </Button>
                </Link>
                {responseState && <CustomChart xAxis={this.state.response.economy}
                                               yAxis={this.state.response.social}/>}
                {!responseState &&
                     <Typography align="center">
                        {questions.map(question => {
                            ++i;
                            return (
                                <div>
                                    <FormControl component="fieldset" required>
                                        <FormContainer>
                                            <FormLabel component="legend">{question.name}</FormLabel>
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
export default GeneratedTest;