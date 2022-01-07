import React, {useEffect} from 'react';
import {Routes} from "../../utils/routing";
import {useLocation, useParams} from "react-router";
import {useStore} from "effector-react";
import {$authUser} from "../../models/auth";
import {Redirect} from "react-router-dom";
import {$room, joinToRoom} from "../../models/room";
import {$wsState, socketInit} from "../../models/ws";

/**
 * VotingRoom page component.
 */
export const VotingRoom = () => {
    const { id } = useParams();
    const {pathname} = useLocation();
    const authUser = useStore($authUser);
    const {ws, error, exception} = useStore($wsState);
    const room = useStore($room);
    const isLoggedIn = !!authUser?.userName;

    useEffect( () => {
        if (!ws) {
            socketInit();
        }

        if (id && ws) {
            joinToRoom(id);
        }
    }, [ws]);

    if (error) {
        return <h3>{error.message}</h3>
    }

    if (exception) {
        return <h3>{exception.message}</h3>
    }


    return !isLoggedIn
        ? <Redirect to={{
            pathname: Routes.AUTH,
            state: {referrer: pathname}
        }}/>
        : <div>
            <h2>RoomID: {room?.uid || 'Нет созданных или присоединённых комнат'}</h2>
            <p>OwnerID: {room?.ownerId || ''}</p>
            <p>CreatedAt: {room?.createdAt || ''}</p>
            <ul>
                {room.users.map(({_id, name}) => <li key={_id}>{`${name} => ${_id}`}</li>)}
            </ul>
        </div>
}
