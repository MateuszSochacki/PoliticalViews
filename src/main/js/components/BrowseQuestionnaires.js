import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button/Button";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

function BrowseQuestionnaires(props) {
    const { classes, questionnaires } = props;

    const handleClick = event => {
        console.log(event.target);
    };

    let i = 0;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
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
                                    <Button variant="contained" color="primary" className="button"
                                           onClick={handleClick}>
                                        Generuj
                                    </Button>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

BrowseQuestionnaires.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(BrowseQuestionnaires);