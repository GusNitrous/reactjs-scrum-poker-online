import { Container, CssBaseline, Avatar, Typography, TextField, Button, Grid } from '@material-ui/core';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import React from 'react';


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

    return <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card>
            <CardContent>
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <SupervisedUserCircleRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Готовы для голосования? Давайте начинать!
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="userName"
                    label="UserName"
                    name="userName"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Создать комнату
                </Button>

                <Grid className={classes.splitter} container direction="row" alignItems="center" justifyContent="center"> 
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
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="roomId"
                    label="RoomId"
                    name="roomId"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                >
                    Присоединиться
                </Button>
            </form>
        </div>
        </CardContent>
        </Card>
    </Container>
}
