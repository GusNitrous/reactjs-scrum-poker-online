import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const BottomPanel = () => {
    return <BottomNavigation>
        <BottomNavigationAction
            label="Leave"
            icon={<ExitToAppIcon/>}
        />
        <BottomNavigationAction
            label="Create"
            icon={<AddCircleOutlineIcon/>}
        />
    </BottomNavigation>
}
