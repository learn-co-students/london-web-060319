import React from 'react'
import { API_ROOT, API_WS_ROOT } from '../constants';
import NewGameForm from './NewGameForm'
import MovesArea from './MovesArea'
import Cable from './Cable'

const findActiveGame = (games, activeGame) => games.find(
    game => game.id === activeGame
);

const mapGames = (games, handleClick, handleDelete) => games.map(
    game => <div className="item" key={game.id} onClick={() => handleClick(game.id)}>
        {game.title}
        <button onClick={(e) => { e.stopPropagation(); handleDelete(game.id) }}>x</button>
    </div>
)

class GameList extends React.Component {

    state = {
        games: [],
        activeGame: null
    }

    setGames = games => this.setState({ games })

    setActiveGame = activeGame => this.setState({ activeGame })

    componentDidMount() {
        fetch(`${API_ROOT}/games`)
            .then(res => res.json())
            .then(games => this.setGames(games))
    }


    handleReceivedGame = response => {
        const { game, deleted } = response;
        const games = this.state.games

        if (deleted)
            this.setGames(games.filter(g => g.id !== game.id))
        else
            this.setGames([...games, game]);
    }


    handleClick = id => {
        this.setActiveGame(id);
    }

    handleDelete = id => {
        if (this.state.activeGame === id)
            this.setActiveGame(null);

        return fetch(`${API_ROOT}/games/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                this.setGames(this.state.games.filter(g => g.id !== id))
            })
    }

    handleReceivedMove = response => {
        const { turn, game_id } = response;
        const { games } = this.state;

        const game = games.find(
            game => game.id === game_id
        );
        let existingTurn = false
        game.turns = game.turns.map(t => {
            if (t.turn === turn.turn) {
                existingTurn = true
                return turn
            }
            return t
        })
        if (!existingTurn) {
            game.turns = [...game.turns, turn];
        }
        this.setGames([...games]);
    }

    render() {
        const { games, activeGame } = this.state
        return (
            <>
                <div className="gamesList">
                    <h2>Games</h2>
                    <NewGameForm />
                    <Cable
                        url={API_WS_ROOT}
                        channel={"GamesChannel"}
                        onRecieved={this.handleReceivedGame}
                    />
                    <div className="list">{mapGames(games, this.handleClick, this.handleDelete)}</div>
                </div>
                {
                    activeGame &&
                    <MovesArea
                        handleRecievedMove={this.handleReceivedMove}
                        game={findActiveGame(
                            games,
                            activeGame
                        )}
                    />
                }
            </>
        )
    }
}

export default GameList