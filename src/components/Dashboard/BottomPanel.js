import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {AppConfirm} from "../Common/AppConfirm";

export const BottomPanel = () => {
    const [showAlert, setShowAlert] = useState(false);

    return <>
        <AppConfirm
            description="Leave from room"
            isOpen={showAlert}
            handleClose={() => setShowAlert(false)}/>
        <BottomNavigation>
            <BottomNavigationAction
                onClick={() => setShowAlert(true)}
                label="Leave"
                icon={<ExitToAppIcon/>}
            />

            <BottomNavigationAction
                onClick={() => setShowAlert(false)}
                label="Create"
                icon={<AddCircleOutlineIcon/>}
            />
        </BottomNavigation>
    </>
}
