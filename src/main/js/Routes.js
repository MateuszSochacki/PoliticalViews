import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

import Home from './components/home'
import Test from './components/Test'
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import Questionnaire from "./components/Questionnaire";
import GeneratedTest from "./components/GeneratedTest";
import LinkedTest from "./components/LinkedTest";


class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Test" component={Test}/>
                <Route path="/Login" component={Login}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/Questionnaire" component={Questionnaire}/>
                <Route path="/GeneratedTest" component={GeneratedTest}/>
                <Route path="/LinkedTest" component={LinkedTest} />
            </Switch>
        );
    }
}
export default withRouter(Routes);