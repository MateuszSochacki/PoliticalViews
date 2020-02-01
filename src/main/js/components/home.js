import React from 'react';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import {Link, withRouter} from "react-router-dom";
import 'typeface-roboto';
import BrowseQuestionnaires from "./BrowseQuestionnaires";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});
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
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            {isSigned && <div>
                                <Button variant="contained" color="secondary" className="button" onClick={this.logout}>
                                    Wyloguj się
                                </Button>
                            </div>}
                            {!isSigned &&
                            <Link to="/Login">
                                <Button variant="contained" color="secondary" className="button">
                                    Zaloguj się
                                </Button><br/>
                            </Link>}
                        </Toolbar>
                    </AppBar>
                </div>
                <div style={style}>
                    <Typography variant="h3" align="center" gutterBottom>
                    <br/>Zanalizuj swoje poglądy już teraz!<br/>
                        <Typography variant="h5" align="center" gutterBottom>
                            Witaj na platformie testów politycznych. Kliknij rozpocznij test, aby okrelić swoje
                            preferencje polityczne,
                            na tle największych polskich partii. Stwórz darmowe konto lub zaloguj się,
                            aby móc dodać i wygenerować swój własny test, który możesz również przesyłać dalej.
                        </Typography>
                        <Link to="/Test">
                            <Button variant="contained" color="primary" className="button">
                                Rozpocznij test
                            </Button><br/>
                        </Link>
                        {isSigned && <div>
                            <Link to="/Questionnaire">
                                <Button variant="contained" color="primary" className="button">
                                    Utwórz swój nowy test
                                </Button>
                            </Link><br/>
                            <BrowseQuestionnaires questionnaires={this.state.questionnaires}/>
                        </div>}
                    </Typography>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);