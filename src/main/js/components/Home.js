import React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import {Link, withRouter} from "react-router-dom";
import 'typeface-roboto';
import BrowseQuestionnaires from "./BrowseQuestionnaires";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isSigned: false,
            questionnaires: []
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        const isSigned = false;
        sessionStorage.clear();
        this.setState({isSigned});
        this.forceUpdate();
    }

    async componentDidMount() {
        const session = sessionStorage.getItem('id');
        if (session !== null && parseInt(session) !== 0) {
            const request = new Request('http://localhost:8080/findQuestionnaires?id='.concat(session), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'manual',
            });
            const response = await fetch(request);
            const data = await response.json();
            const questionnaires = data.questionnaires;
            this.setState({isSigned: true, questionnaires});
        }
    }

    render() {
        const style = {
            width: '100%'
        };
        let {isSigned} = this.state;

        return (
            <div style={style}>
                <Typography variant="h3" align="center" gutterBottom>
                    Zanalizuj swoje poglądy już teraz!<br/>
                    <Link to="/Test">
                        <Button variant="contained" color="primary" className="button">
                            Rozpocznij test
                        </Button>
                    </Link>
                    {isSigned && <div>
                        <Button variant="contained" color="primary" className="button" onClick={this.logout}>
                            Wyloguj się
                        </Button><br/>
                        <BrowseQuestionnaires questionnaires={this.state.questionnaires}/>
                    </div>}
                    {!isSigned &&
                    <Link to="/Login">
                        <Button variant="contained" color="primary" className="button">
                            Zaloguj się
                        </Button>
                    </Link>}
                </Typography>
            </div>
        );
    }
}

export default withRouter(Home);