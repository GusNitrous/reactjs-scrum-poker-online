import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from '@material-ui/core';
import {createRoom} from "../../models/room";
import {socketInit} from "../../models/ws";
import {useHistory} from "react-router";
import {useOverShadowStyles} from '@mui-treasury/styles/shadow/over';
import {makeStyles} from "@material-ui/core/styles";
import cx from 'clsx';


const useStyles = makeStyles(({ spacing }) => ({
    root: {
        marginTop: spacing(8),
        borderRadius: spacing(1),
    },
    content: {
        textAlign: 'center'
    },
    submit: {
        margin: spacing(2, 0, 2),
    },
    splitter: {
        margin: spacing(2, 0, 2),
    }
}));

export const QuickStart = () => {
    const styles = useStyles();
    const shadowStyles = useOverShadowStyles();
    const history = useHistory();
    const [roomId, setRoomId] = useState('');

    useEffect(() => {
        socketInit();
    }, []);

    return <Card className={cx(styles.root, shadowStyles.root)}>
        <CardContent className={styles.content}>
            <Typography component="h1" variant="h5">
                Are you  ready?
            </Typography>
            <Button
                type="buttom"
                onClick={() => createRoom()}
                fullWidth
                className={cx("MuiButton--gradient MuiButton--gradient-label", styles.submit)}
            >
                Create new room
            </Button>

            <Grid
                className={styles.splitter}
                container
                direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item xs={2}>
                    <Divider/>
                </Grid>
                <Grid item xs={8}>
                    Room already created?
                </Grid>
                <Grid item xs={2}>
                    <Divider/>
                </Grid>
            </Grid>

            <TextField
                value={roomId}
                onInput={(e) => setRoomId(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
                id="roomId"
                label="RoomId"
                name="roomId"
            />
            <Button
                disabled={!roomId}
                type="submit"
                fullWidth
                onClick={() => history.push(`/room/${roomId}`)}
                className={styles.submit}
            >
                Join to room
            </Button>
        </CardContent>
    </Card>;
}
