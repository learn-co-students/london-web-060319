import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewMoveForm extends React.Component {
    state = {
        number: '',
        user_id: localStorage.user_id || '',
        game_id: this.props.game_id
    };

    componentDidUpdate = prevProps => {
        if (prevProps.game_id !== this.props.game_id) {
            this.setState({
                game_id: this.props.game_id,
                number: ''
            });
        }
    };

    handleChange = e => {
        this.setState({ number: parseInt(e.target.value) });
    };

    handleUserChange = e => {
        localStorage.user_id = e.target.value
        this.setState({ user_id: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        fetch(`${API_ROOT}/moves`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(this.state)
        });
        this.setState({ text: '' });
    };

    render = () => {
        return (
            <div className="newMoveForm">
                <form onSubmit={this.handleSubmit}>
                    <label>New Move:</label>
                    <br />
                    <input
                        type="number"
                        placeholder="your value"
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="user id"
                        value={this.state.user_id}
                        onChange={this.handleUserChange}
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    };
}

export default NewMoveForm;
