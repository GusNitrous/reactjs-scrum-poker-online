import React, {useState} from 'react';
import {
    Button,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Divider,
    Grid,
    LinearProgress,
    TextField,
    Typography
} from '@material-ui/core';
import {useHistory, useParams} from "react-router-dom";
import {getSocket} from '../../utils/ws';
import {makeStyles} from '@material-ui/core/styles';
import {
    CREATE_ROOM,
    EXCEPTION,
    JOIN_USER,
    RECEIVE_MESSAGE,
    ROOM_CREATED,
    USER_JOINED,
    USER_JOINED_TO_ROOM
} from '../../constants/ws-events';
import {MissingAuthDataError} from '../../errors/missing-auth-data.error';
import {UNAUTHORIZED} from '../../constants/http-status';
import {clearAuthData} from '../../utils/auth';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    splitter: {
        margin: theme.spacing(2, 0, 2),
    }
}));

/**
 * QuickStart page component.
 */
export const QuickStart = () => {
    const classes = useStyles();
    const history = useHistory();
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [roomId, setRoomId] = useState('');

    const handleException = (err) => {
        if (err.status === UNAUTHORIZED) {
            clearAuthData();
            history.replace('/');
        } else {
            console.log(err.message);
        }
    }

    const socket = () => {
        try {
            return getSocket()
                .on('error', (err) => {
                    if (err?.messgae) {
                        console.log(err?.message);
                    }
                })
                .on(EXCEPTION, handleException)
                .on('connection', (ws) => {
                    console.log('connection', ws);
                })
                .on(USER_JOINED_TO_ROOM, (userId) => {
                    console.log('User joined to room', userId);
                }).on(RECEIVE_MESSAGE, (message) => {
                    console.log('RECEIVE_MESSAGE =>', message);
                });
        } catch (err) {
            console.log(err);
            if (err instanceof MissingAuthDataError) {
                history.replace('/auth');
            }
        }
    }

    const createRoom = () => {
        console.log('create room');

        const ws = socket();
        ws?.on(ROOM_CREATED, (roomId) => {
            history.push(`/room/${roomId}`);
            console.log('created room', roomId);
        }).emit(CREATE_ROOM);
    }

    const joinRoom = (roomId) => {
        if (id !== roomId) {
            history.push(`/room/${roomId}`);
        }

        const ws = socket();
        ws?.on(USER_JOINED, (roomId) => {
            console.log('user joined', roomId);
        }).emit(JOIN_USER, {roomId});
    }

    return <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Card>
            {isLoading && <LinearProgress/>}
            <CardContent>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Готовы начать голосование?
                    </Typography>
                    <Button
                        type="buttom"
                        onClick={createRoom}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Создать комнату
                    </Button>

                    <Grid
                        className={classes.splitter}
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center">
                        <Grid item xs={3}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={6} className={classes.middleText}>
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
                        onClick={() => joinRoom(roomId)}
                        className={classes.submit}
                    >
                        Присоединиться
                    </Button>
                </div>
            </CardContent>
        </Card>
    </Container>
}
