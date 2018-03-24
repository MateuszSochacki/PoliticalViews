import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    NavLink, Route

} from 'react-router-dom'
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
                   {/*<AppBar position="static">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                Sekcje testu:
                            </Typography>
                            <Typography variant ="body2" color="inherit">
                                <Button color="inherit">Ekonomia</Button>
                                <Button color="inherit">Państwo</Button>
                                <Button color="inherit">Światpogląd</Button>
                            </Typography>
                    </Toolbar>
                    </AppBar>*/}
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Test">Test</NavLink>
                        </li>
                    </ul>
                    <Routes />
                </div>
            </Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
export default App;

