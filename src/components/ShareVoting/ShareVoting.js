import React, {useEffect, useState} from "react";
import {Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LinkIcon from '@material-ui/icons/Link';
import QRCode from "react-qr-code";
import {AppDialog, DialogContent, DialogTitle} from "../Common/AppDialog";
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import ShareIcon from "@material-ui/icons/Share";


export const ShareVoting = () => {
    const styles = useStyles();
    const [link, setLink] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const {id: roomId} = useStore($room);

    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        setLink(window.location.href);
    }, []);
    
    // TODO: moving to common utils
    const copy = (value) => {
        navigator
            .clipboard
            ?.writeText(value)
            .catch((err) => {
                console.error(err);
            });
    }

    return <>
        <Button
            size="large"
            type="text"
            endIcon={<ShareIcon/>}
            onClick={() => setIsOpen(true)}>
            Room: {roomId}
        </Button>
        <AppDialog onClose={handleClose} open={isOpen}>
            <DialogTitle onClose={handleClose}>
                Share this room
            </DialogTitle>
            <DialogContent dividers>
                <Grid container>
                    <Grid container justifyContent="center">
                        <QRCode value={link}/>
                    </Grid>
                    <Grid container spacing={2} className={styles.buttonsBlock}>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={() => {
                                    copy(link);
                                }}
                                endIcon={<LinkIcon/>}>
                                Copy link
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={() => {
                                    copy(roomId);
                                }}
                                endIcon={<FileCopyIcon/>}>
                                Copy RoomId
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </AppDialog>
    </>
}

const useStyles = makeStyles(() => {
    return {
        buttonsBlock: {
            marginTop: 15
        }
    }
});
