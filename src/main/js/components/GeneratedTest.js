import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Forward from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button/Button";
import FormControl from "@material-ui/core/FormControl/FormControl";
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";

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

        this.getQuestionnaire = this.getQuestionnaire.bind(this);

        this.state = {
            questionnaire: {
                questionnaireId:'',
                name:'',
                description:'',
                questions:[]
            },
            radioItem: ''
        }
    }

    async getQuestionnaire() {

        // będzie z propsów wyciachany
        const id = 20;

        const request = new Request('http://localhost:8080/findQuestionnaire?id=20', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'manual',
        });
         await fetch(request)
            .then(response => {
                if (response.ok) {
                    console.log('questionnaire succesfully obtained');
                }
                return response.json();
            }).then(data => {
            this.setState({
                questionnaire: data
            });
            console.log('parsed json', data);
        }).catch(err => console.error(err));

    };

    async componentDidMount() {
        // będzie z propsów wyciachany
        const id = 20;

        const request = new Request('http://localhost:8080/findQuestionnaire?id=20', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'manual',
        });
        const response = await fetch(request);
        const json = await response.json();
        this.setState({ questionnaire: json });
    }

    render() {
        const {name, description, questions} = this.state.questionnaire;

        return (
            <div style={{
                paddingTop: '50px'
            }}>
                <Typography align="center">
                    {questions.map(question => {
                        return (
                            <div>
                                <FormControl component="fieldset" required>
                                    <FormContainer>
                                        <FormLabel component="legend">{question.name}</FormLabel>
                                        <RadioGroup
                                            /*aria-label={this.state.radio}
                                            name={this.state.radio}
                                            value={groupValue}*/
                                            //onChange={this.handleChangeRadio}
                                            row={true}
                                        >
                                            <FormControlLabel value={question.answers[0].economy} control={<Radio/>}
                                                              label={question.answers[0].contents}/>
                                            <FormControlLabel value={question.answers[1].economy} control={<Radio/>}
                                                              label={question.answers[1].contents}/>
                                            <FormControlLabel value={question.answers[2].economy} control={<Radio/>}
                                                              label={question.answers[2].contents}/>
                                            <FormControlLabel value={question.answers[3].economy} control={<Radio/>}
                                                              label={question.answers[3].contents}/>
                                        </RadioGroup>
                                    </FormContainer>
                                </FormControl><br/>
                            </div>
                        );
                    })}
                    <Button variant="contained" size="medium" /*onClick={this.getQuestionnaire}*/>
                        Pokaż wyniki <Forward/>
                    </Button>
                </Typography>
            </div>
        );
    }

}
export default GeneratedTest;