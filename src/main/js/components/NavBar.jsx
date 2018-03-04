import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

class NavBar extends Component {

    render() {
        return (
            <div>
                <AppBar position="static">
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
                </AppBar>
            </div>
        )
    }

}
export default NavBar;