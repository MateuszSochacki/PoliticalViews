import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

function BrowseQuestions(props) {
    const { classes, questions } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Pytanie:</TableCell>
                        <TableCell>Odpowiedź 1</TableCell>
                        <TableCell>Wartość na osi gospodarczej:</TableCell>
                        <TableCell>Wartość na osi światopoglądowej:</TableCell>
                        <TableCell>Odpowiedź 2</TableCell>
                        <TableCell>Wartość na osi gospodarczej:</TableCell>
                        <TableCell>Wartość na osi światopoglądowej:</TableCell>
                        <TableCell>Odpowiedź 3</TableCell>
                        <TableCell>Wartość na osi gospodarczej:</TableCell>
                        <TableCell>Wartość na osi światopoglądowej:</TableCell>
                        <TableCell>Odpowiedź 4</TableCell>
                        <TableCell>Wartość na osi gospodarczej:</TableCell>
                        <TableCell>Wartość na osi światopoglądowej:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {questions.map(question => {
                        return (
                            <TableRow key={question._id}>
                                <TableCell component="th" scope="row">
                                    {question.name}
                                </TableCell>
                                <TableCell>{question.answers[0].contents}</TableCell>
                                <TableCell>{question.answers[0].economy}</TableCell>
                                <TableCell>{question.answers[0].social}</TableCell>
                                <TableCell>{question.answers[1].contents}</TableCell>
                                <TableCell>{question.answers[1].economy}</TableCell>
                                <TableCell>{question.answers[1].social}</TableCell>
                                <TableCell>{question.answers[2].contents}</TableCell>
                                <TableCell>{question.answers[2].economy}</TableCell>
                                <TableCell>{question.answers[2].social}</TableCell>
                                <TableCell>{question.answers[3].contents}</TableCell>
                                <TableCell>{question.answers[3].economy}</TableCell>
                                <TableCell>{question.answers[3].social}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

BrowseQuestions.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(BrowseQuestions);