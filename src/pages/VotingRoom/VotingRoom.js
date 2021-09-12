import React, { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";
import {getSocket} from '../../utils/ws';
import { useHistory } from "react-router-dom";

/**
 * VotingRoom page component.
 */
export const VotingRoom = () => {
    const history = useHistory();
    const { id } = useParams();
    const [error, setError] = useState(null);

    const handleCreate = (ws) => {
        ws.on('ROOM_CREATED', (roomId) => {
            history.push(`/room/${roomId}`);
        }).emit('CREATE_ROOM');
    }

    const handleJoin = (ws) => {
        console.log('User join', ws);
    }

    useEffect(() => {
        const ws = getSocket()
        .on('exception', (err) => {
            setError(err);
        })
        .once('connect', () => {
            if (id === 'create') {
                handleCreate(ws);
            } else {
                handleJoin(ws);
            }
        });
        
        return () => ws.removeAllListeners();
    });

    return <div>
        <h1>VotingRoom ID: {id}</h1>
        {error && <div>Error: {error}</div>}
    </div>;
}
