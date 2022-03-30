import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useConfirm} from 'material-ui-confirm';
import {createRoom, leaveFromRoom} from "../../models/room";

const LEAVE_ROOM = {
    event: leaveFromRoom,
    question: 'Leave room?'
};
const CREATE_ROOM = {
    event: createRoom,
    question: 'Create new room?'
}

export const BottomPanel = ({roomId}) => {
    const confirm = useConfirm();
    const confirmAction = ({event, question}) => {
        confirm({
            title: '⚠️ Confirm action',
            description: question
        }).then(() => event(roomId), () => {
            console.log('--- action rejected ---');
        });
    };

    return <BottomNavigation>
        <BottomNavigationAction
            onClick={() => confirmAction(CREATE_ROOM)}
            label="Create"
            icon={<AddCircleOutlineIcon/>}
        />
        <BottomNavigationAction
            onClick={() => confirmAction(LEAVE_ROOM)}
            label="Leave"
            icon={<ExitToAppIcon/>}
        />
    </BottomNavigation>
}
