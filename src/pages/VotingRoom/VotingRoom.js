import React, { useEffect, useState } from 'react';
import {
  useParams
} from "react-router-dom";
import {getSocket} from '../../utils/ws';
import { useHistory } from "react-router-dom";
import {CONNECT, EXCEPTION, CREATE_ROOM, ROOM_CREATED } from '../../ws-events';
import { MissingAuthDataError } from '../../errors/missing-auth-data.error';

/**
 * VotingRoom page component.
 */
export const VotingRoom = () => {
    const history = useHistory();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const connect = () => {
        const ws = getSocket();
        ws.on(EXCEPTION, (err) => {
            setError(err);
        })
        .once(CONNECT, () => {
            // Creating new room
            if (id === 'create') {
                handleCreate(ws);
            } else {
                handleJoin(ws);
            }
        });
        return ws;
    }

    const handleConnnectError = (err) => {
        if (err instanceof MissingAuthDataError) {
            history.replace('/');
            return;
        }

        setError(err);
    }

    const handleCreate = (ws) => {
        ws.on(ROOM_CREATED, (roomId) => {
            history.push(`/room/${roomId}`);
        }).emit(CREATE_ROOM);
    }

    const handleJoin = (ws) => {
        console.log('User join', ws);
    }

    useEffect(() => {
        try {
            const ws = connect();
            return () => ws && ws.removeAllListeners();
        } catch (err) {
            handleConnnectError(err);
        }
    });

    return <div>
        <h1>VotingRoom ID: {id}</h1>
        {error && <div>Error: {error}</div>}
    </div>;
}
