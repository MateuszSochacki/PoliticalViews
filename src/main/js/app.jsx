import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes.jsx'
import 'typeface-roboto'

class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {


        return (
            <Router >
                <div className="container">
                    <Routes />
                </div>
            </Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
export default App;

