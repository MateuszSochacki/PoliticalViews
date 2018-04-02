import React from 'react';
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button';

class Home extends React.Component {

    constructor() {
        super();


    }

    render() {



        const style = {
            width: '100%'
        };

        return (
            <div style={style}>
                <Typography variant="display3" align="center" gutterBottom>
                    Zanalizuj swoje poglądy już teraz!<br/>


                    <Button variant="raised" color="primary" className="button">
                        Rozpocznij test
                    </Button>
                </Typography>
            </div>
        );
    }
}

export default Home;