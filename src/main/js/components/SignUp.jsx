import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link, withRouter} from "react-router-dom";
import Notifications, {notify} from "./Notifications";
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        };
        this.createUser = this.createUser.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUserName(event) {
        this.setState({userName: event.target.value});
    };

    handlePassword(event) {
        this.setState({password: event.target.value});
    };

    createUser(event) {

        const {history} = this.props;
        event.preventDefault();
        const userName = this.state.userName;
        const password = this.state.password;
        const data = {userName, password};

        const request = new Request('http://localhost:8080/addUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'manual',
            body: JSON.stringify(data)
        });
        fetch(request)
            .then(response => {
                if (response.ok) {
                    history.push('/Login');
                    console.log('Successfully Login');
                    return response.json();
                } else {
                    notify('Taki użytkownik już istnieje!', false)
                    return response.json();
                }
            }).then(data => {
        }).catch(err => console.error(err));
    };

    render() {
        const {classes} = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Zarejestruj się
                    </Typography>
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="Nazwa użytkownika"
                                    name="userName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Nazwa użytkownika"
                                    autoFocus
                                    value={this.state.userName}
                                    onChange={this.handleUserName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Hasło"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={this.state.password}
                                    onChange={this.handlePassword}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.createUser}
                        >
                            Zarejestruj się
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/Login" variant="body2">
                                    Masz już konto? Zaloguj się
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div>
                    <Notifications/>
                </div>
            </Container>
        );
    }
}
export default withStyles(useStyles)(SignUp);
