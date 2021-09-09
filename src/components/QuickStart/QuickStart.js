import { Container, CssBaseline, Avatar, Typography, TextField, Button, Grid } from '@material-ui/core';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import React, { useState } from 'react';
import * as AuthAPI from '../../rest-api/auth';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useHistory } from "react-router-dom";


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
 * QuickStart component.
 */
export const QuickStart = () => {
    const classes = useStyles();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [errors, setErrors] = useState({});


    const createRoom = () => {
        setIsLoading(true);
        AuthAPI.auth(userName)
            .then(({ws, roomId}) => {
                console.log({ws, roomId});

                history.push(`/room/${roomId}`);
            }).catch((err) => {
                console.log(err);
                setErrors(err);
            }).finally(() => {
                setIsLoading(false);
            });
    };

    const joinRoom = () => {
        console.log(roomId);
    };

    return <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card>
            {isLoading && <LinearProgress/>}
            <CardContent>
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SupervisedUserCircleRoundedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Готовы начать голосование?
                </Typography>
                    <TextField
                        error={!!errors.userName}
                        helperText={errors.userName}
                        value={userName}
                        onInput={(e) => setUserName(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="userName"
                        label="UserName"
                        name="userName"
                        autoFocus
                    />
                    <Button
                        disabled={!userName || isLoading}
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
                            <Divider />
                        </Grid>
                        <Grid item xs={6} className={classes.middleText}>
                            Уже есть комната?
                        </Grid>
                        <Grid item xs={3}>
                            <Divider />
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
                        onClick={joinRoom}
                        className={classes.submit}
                    >
                        Присоединиться
                    </Button>
            </div>
            </CardContent>
        </Card>
    </Container>
}
