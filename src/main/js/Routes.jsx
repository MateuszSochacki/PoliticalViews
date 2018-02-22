import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/home'
import About from './components/about'


class Routes extends Component {


    render() {

        return (

            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>

        );
    }
}
export default Routes;