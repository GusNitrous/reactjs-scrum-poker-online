import React, {useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {ShareVoting} from "../ShareVoting/ShareVoting";

export const BottomPanel = () => {
    const [openShare, setOpenShare] = useState(false);

    return <div>
        <ShareVoting
            isOpen={openShare}
            handleClose={() => setOpenShare(false)}
        />
        <BottomNavigation>
            <BottomNavigationAction
                label="Share"
                icon={<ShareIcon/>}
                onClick={() => setOpenShare(true)}
            />
            <BottomNavigationAction
                label="Leave"
                icon={<ExitToAppIcon/>}
            />
            <BottomNavigationAction
                label="Create"
                icon={<AddCircleOutlineIcon/>}
            />
        </BottomNavigation>
    </div>
}
