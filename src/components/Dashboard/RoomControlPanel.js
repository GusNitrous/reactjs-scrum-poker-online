import React from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export const RoomControlPanel = () => {
    return <BottomNavigation>
        <BottomNavigationAction label="Share" icon={<ShareIcon/>}/>
        <BottomNavigationAction label="Create" icon={<AddCircleOutlineIcon/>}/>
        <BottomNavigationAction label="Leave" icon={<ExitToAppIcon/>}/>
    </BottomNavigation>
}
