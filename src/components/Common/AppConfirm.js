import React from "react";
import {AppDialog, DialogActions, DialogContent, DialogTitle} from "./AppDialog";
import {Button, Typography} from "@material-ui/core";

export const AppConfirm = ({handleClose, isOpen, description}) => {
    return <AppDialog
        fullWidth maxWidth="xs"
        onClose={handleClose} open={isOpen}
    >
        <DialogTitle onClose={handleClose}>
            Are you sure?
        </DialogTitle>
        <DialogContent dividers>
            <Typography>
                {description}
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Disagree
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
                Agree
            </Button>
        </DialogActions>
    </AppDialog>
}



