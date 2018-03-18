import React, { Component } from 'react';
import green from "material-ui/es/colors/green";
import Radio from 'material-ui/Radio';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

/*const styles = {
    checked: {
        color: green[500],
    },
};*/

class SocialView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: 'a',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        /*fetch('http://localhost:8080/api/coordinates',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(this.state)
            }).catch(err => console.error(err));*/
    }


    saveData() {

    }

    handleChange(event) {
        this.setState({selectedValue: event.target.value});
    }

    render() {

        return (
            <div>
                <Radio
                    checked={this.state.selectedValue === 'a'}
                    onChange={this.handleChange}
                    value="a"
                    name="radio-button-demo"
                    aria-label="A"
                />
                <Radio
                    checked={this.state.selectedValue === 'b'}
                    onChange={this.handleChange}
                    value="b"
                    name="radio-button-demo"
                    aria-label="B"
                />
                <Radio
                    checked={this.state.selectedValue === 'c'}
                    onChange={this.handleChange}
                    value="c"
                    name="radio-button-demo"
                    aria-label="C"
                />
            </div>
        );
    }
}
SocialView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SocialView;