import React from "react";
import {Button} from "@material-ui/core";
import {startVoting, stopVoting} from "../../models/voting";

export const ControlButtons = () => {
    return <>
        <Button onClick={() => startVoting()} variant="outlined">
            Start voting
        </Button>
        <Button onClick={() => stopVoting()} variant="outlined">
            Stop voting
        </Button>
    </>
}
