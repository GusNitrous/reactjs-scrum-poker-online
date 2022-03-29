import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {useConfirm} from 'material-ui-confirm';

export const BottomPanel = () => {
    const confirm = useConfirm();

    const showAlert = (question) => {
        confirm({title: 'Confirm action', description: question})
            .then(() => {

            })
            .catch(() => {

            });
    };

    return <>

        <BottomNavigation>
            <BottomNavigationAction
                onClick={() => showAlert('Create new room?')}
                label="Create"
                icon={<AddCircleOutlineIcon/>}
            />
            <BottomNavigationAction
                onClick={() => showAlert('Leave room?')}
                label="Leave"
                icon={<ExitToAppIcon/>}
            />
        </BottomNavigation>
    </>
}
