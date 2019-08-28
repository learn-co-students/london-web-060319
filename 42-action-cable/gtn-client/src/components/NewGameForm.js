import React from 'react';
import { API_ROOT, HEADERS } from '../constants';

class NewGameForm extends React.Component {
    state = {
        title: '',
        your_user_id: '1',
        their_user_id: '2'
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            title: '',
            your_user_id: '',
            their_user_id: ''
        });
        return fetch(`${API_ROOT}/games`, {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify({
                game: {
                    title: this.state.title,
                    user_ids: [this.state.your_user_id, this.state.their_user_id]
                }
            })
        });
    };

    render = () => {
        return (
            <div className="newGameForm">
                <form onSubmit={this.handleSubmit}>
                    <label>New Game:</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        placeholder="Game title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="your_user_id"
                        placeholder="Your ID"
                        value={this.state.your_user_id}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        name="their_user_id"
                        placeholder="Their ID"
                        value={this.state.their_user_id}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        );
    };
}

export default NewGameForm;