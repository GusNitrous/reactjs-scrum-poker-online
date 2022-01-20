import React from 'react';
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import Grid from "@material-ui/core/Grid";

export const Issues = () => {
    const room = useStore($room);
    return <Grid>
        <h2>RoomID: {room?.id || 'Нет созданных или присоединённых комнат'}</h2>
        <p>OwnerID: {room?.ownerId || ''}</p>
        <p>CreatedAt: {room?.createdAt || ''}</p>
    </Grid>
}
