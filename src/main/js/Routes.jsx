import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/home'
import Test from './components/Test'


class Routes extends Component {


    render() {

        return (

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/Test" component={Test}/>
            </Switch>

        );
    }
}
export default Routes;