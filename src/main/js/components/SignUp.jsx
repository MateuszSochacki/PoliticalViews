import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from "react-router";

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


export default class SignUp extends Component {

    constructor(props) {

        super(props);
        this.state = {
            user: {
                userName: "",
                password: ""
            },
            registered: false
        };
        this.createUser = this.createUser.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUserName(event) {
        this.setState({userName: event.target.value})
    }

    handlePassword(event) {
        this.setState({password: event.target.value})
    }

    createUser() {
        fetch('http://localhost:8080/addUser',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state)
            }).catch(err => console.error(err))
            .then(response => response.json())
            .then(data => {
                if(data.status == 200){
                    this.props.history.push("/");
                    console.log('Successfully Login');
                }
            });

        //this.setState({registered: true});
    }

    render() {

        const {registered} = this.state.registered;

        if (registered) {
            return <Redirect to='/Login'/>
        }

        const classes = useStyles;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Zarejestruj się
                    </Typography>
                    <form className={classes.form} >
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
                                <Link href="/Login" variant="body2">
                                    Masz już konto? Zaloguj się
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>

        );
    }
}
