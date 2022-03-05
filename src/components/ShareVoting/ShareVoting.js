import React from "react";
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import {Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
    return {}
});

export const ShareVoting = ({isOpen, handleClose}) => {
    return <Dialog onClose={handleClose} open={isOpen}>
        <MuiDialogTitle>
            <Typography>Title</Typography>
        </MuiDialogTitle>
        <MuiDialogContent>
            <Typography>Content</Typography>
        </MuiDialogContent>
        <MuiDialogActions>
            <Button>Actions</Button>
        </MuiDialogActions>
    </Dialog>
}
