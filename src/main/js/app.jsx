import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    NavLink, Switch,

} from 'react-router-dom'

import Home from './home'
import About from './about'

class App extends Component {


    render() {

        return (
            <Router >
                <div className="container">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
export default App;

