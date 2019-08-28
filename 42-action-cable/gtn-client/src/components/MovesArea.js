import React from 'react';
import NewMoveForm from './NewMoveForm';
import Cable from './Cable';
import { API_WS_ROOT } from '../constants/index'

const MovesArea = ({
    game: { id, title, turns },
    handleRecievedMove
}) => {
    return (
        <div className="movesArea">
            <Cable
                url={API_WS_ROOT}
                channel={{ channel: "MovesChannel", game_id: id }}
                onRecieved={handleRecievedMove}
            />
            <h2>{title}</h2>
            <div className="list">{orderedTurns(turns)}</div>
            <NewMoveForm game_id={id} />
        </div>
    );
};

export default MovesArea;

const orderedTurns = turns => turns.sort(
    (a, b) => a.turn - b.turn
).map(
    turn => <div className="item inactive" key={turn.turn}>
        {turn.u1_number || 'no guess yet'} : {turn.u2_number || 'no guess yet'}
    </div>
);