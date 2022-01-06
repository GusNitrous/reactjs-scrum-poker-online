import React, {useEffect, useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Divider,
    Grid,
    TextField,
    Typography
} from '@material-ui/core';
import {useStyles} from "./QuickStartStyles";
import {createRoom, joinToRoom} from "../../models/room";
import {socketInit} from "../../models/ws";

/**
 * QuickStart page component.
 */
export const QuickStart = () => {
    const styles = useStyles();
    const [roomId, setRoomId] = useState('');

    useEffect(() => {
        socketInit();
    }, []);

    return <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Card>
            <CardContent>
                <div className={styles.paper}>
                    <Typography component="h1" variant="h5">
                        Готовы начать голосование?
                    </Typography>
                    <Button
                        type="buttom"
                        onClick={() => createRoom()}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={styles.submit}
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
                        onClick={() => joinToRoom(roomId)}
                        className={styles.submit}
                    >
                        Присоединить
                    </Button>
                </div>
            </CardContent>
        </Card>
    </Container>;
}
