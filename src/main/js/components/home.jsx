import React from 'react';
import Typography from 'material-ui/Typography'

class Home extends React.Component {



    render() {

        const style = {
            width: '100%'
        };

        return (
            <div style={style}>
                <Typography align="center" gutterBottom>
                    Zanalizuj swoje poglądy już teraz!
                </Typography>
            </div>
        );
    }
}

export default Home;