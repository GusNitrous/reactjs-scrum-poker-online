import React from "react";
import {Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LinkIcon from '@material-ui/icons/Link';
import QRCode from "react-qr-code";
import {AppDialog, DialogContent, DialogTitle} from "../Common/AppDialog";

const useStyles = makeStyles(() => {
    return {
        buttonsBlock: {
            marginTop: 15
        }
    }
});

export const ShareVoting = ({isOpen, handleClose}) => {
    const styles = useStyles();

    return <AppDialog onClose={handleClose} open={isOpen}>
        <DialogTitle onClose={handleClose}>
            Share this room
        </DialogTitle>
        <DialogContent dividers>
            <Grid container>
                <Grid container justifyContent="center">
                    <QRCode value="test"/>
                </Grid>
                <Grid container spacing={2} className={styles.buttonsBlock}>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="outlined"
                            endIcon={<LinkIcon/>}>
                            Copy link
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant="outlined"
                            endIcon={<FileCopyIcon/>}>
                            Copy RoomId
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </DialogContent>
    </AppDialog>
}
