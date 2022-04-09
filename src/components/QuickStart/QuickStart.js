import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Divider, Grid, TextField, Typography} from '@material-ui/core';
import {createRoom} from "../../models/room";
import {socketInit} from "../../models/ws";
import {useHistory} from "react-router";
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import cx from 'clsx';
import {makeStyles} from "@material-ui/core/styles";


export const QuickStart = () => {
    const styles = useStyles();
    const shadowStyles = useOverShadowStyles();
    const history = useHistory();
    const [roomId, setRoomId] = useState('');

    useEffect(() => {
        socketInit();
    }, []);

    return <Card className={cx(styles.root, shadowStyles.root)}>
        <CardContent className={styles.cardContent}>
            <Typography component="h1" variant="h5">
                Готовы начать?
            </Typography>
            <Button
                type="buttom"
                onClick={() => createRoom()}
                fullWidth
                variant="contained"
                color="primary"
                className="MuiButton--gradient"
            >
                Создать комнату
            </Button>

            <Grid
                className={styles.splitter}
                container
                direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item xs={3}>
                    <Divider/>
                </Grid>
                <Grid item xs={6}>
                    Уже есть комната?
                </Grid>
                <Grid item xs={3}>
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
                variant="contained"
                onClick={() => history.push(`/room/${roomId}`)}
                className={styles.submit}
            >
                Присоединиться
            </Button>
        </CardContent>
    </Card>;
}

export const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        borderRadius: spacing(2),
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    },
    cardContent: {
        textAlign: 'center'
    },
    submit: {
        margin: spacing(2, 0, 2),
    },
    splitter: {
        margin: spacing(2, 0, 2),
    }
}));
