import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button/Button";
import Autocomplete from "@material-ui/lab/Autocomplete/Autocomplete";
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";
import {Link} from "react-router-dom";
import Notifications, {notify} from "./Notifications";

const styles = theme => ({
    root: {
        fontSize: 26,
        paddingTop: '100px'
    },
    notification: {
        fontSize: 14,
    },
    table: {
        minWidth: 700,
    },
    button: {
        marginLeft: theme.spacing.unit
    }
});

function BrowseQuestionnaires(props) {

    const [questionnaire, setQuestionnaire] = React.useState({});

    const {classes, questionnaires} = props;

    const handleChange = event => {
        let questionnaire = {};
        Object.keys(questionnaires).forEach(function (key) {
            if (questionnaires[key].name === event.target.textContent)
                questionnaire = questionnaires[key];
        });
        setQuestionnaire(questionnaire);
    };

    const handleClick = event => {
        const text = "http://localhost:8080/LinkedTest?id=".concat(questionnaire.questionnaireId);
        if (questionnaire.questionnaireId !== undefined && questionnaire.questionnaireId !== '') {
            navigator.clipboard.writeText(text);
            notify('Skopiowano link do schowka!', true);
        } else notify('Musisz wybrać test z listy!', false);
    };

    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item xs={3}>
                    Wybierz test do wygenerowania:
                </Grid>
                <Grid item xs={3}>
                    <Autocomplete
                        id="combo-box"
                        options={questionnaires}
                        getOptionSelected={option => option}
                        getOptionLabel={option => option.name}
                        style={{width: 400}}
                        onChange={handleChange}
                        renderInput={params => (
                            <TextField {...params} label="Twoje testy" variant="outlined" fullWidth/>
                        )}
                    />
                </Grid>
                <Grid item xs={2} className={classes.button}>
                    <Link to={{
                        pathname: '/GeneratedTest',
                        state: {
                            toGenerate: questionnaire
                        }
                    }}>
                        <Button variant="contained" fullWidth color="primary">
                            Generuj
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={2} className={classes.button}>
                    <Button variant="contained" fullWidth color="primary" onClick={handleClick}>
                        Udostępnij test
                    </Button>
                    <Notifications className={classes.notification}/>
                </Grid>
            </Grid>
        </div>

        /*<Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Id:</TableCell>
                    <TableCell>Nazwa testu:</TableCell>
                    <TableCell>Opis:</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {questionnaires.map(questionnaire => {
                    return (
                        <TableRow key={++i} hover role="checkbox">
                            <TableCell component="th" scope="row">
                                {questionnaire.questionnaireId}
                            </TableCell>
                            <TableCell>{questionnaire.name}</TableCell>
                            <TableCell>{questionnaire.description}</TableCell>
                            <TableCell>
                                <List component="div" aria-label="generate">
                                    <ListItem button onClick={handleClick(questionnaire)}>
                                        <ListItemText primary="Generuj" />
                                    </ListItem>
                                </List>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>*/

    );
}

BrowseQuestionnaires.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(BrowseQuestionnaires);