import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

import Home from './components/Home'
import Test from './components/Test'
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import Questionnaire from "./components/Questionnaire";
import GeneratedTest from "./components/GeneratedTest";


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
            </Switch>
        );
    }
}
export default withRouter(Routes);