import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class CreateHotelForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        axios.post('/user', {
            value: this.state.value
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <TextField
                        hintText="Hotel name"
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <RaisedButton label="Primary" primary={true} type="submit"/>
            </form>
        );
    }
}

// https://facebook.github.io/react/docs/forms.html