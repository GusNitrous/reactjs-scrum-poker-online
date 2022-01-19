import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardActions, CardContent, CardHeader} from "@material-ui/core";
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import {UserList} from "../UserList/UserList";
import Typography from "@material-ui/core/Typography";
import {startVoting, stopVoting} from "../../models/voting";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '8px auto',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        backgroundColor: '#347ec9',
        color: '#fff',
        padding: 12
    },
    title: {},
    cardContent: {
        padding: 10
    },
    actions: {
        padding: 25,
        justifyContent: "space-between"
    }
}));

export const Dashboard = () => {
    const styles = useStyles();
    const room = useStore($room);
    return <Card className={styles.root}>
        <CardHeader
            className={styles.header}
            title={
                <Typography align="center" className={styles.title} variant="h5" component="h3">
                    Voting users
                </Typography>
            }/>
        <CardContent className={styles.cardContent}>
            <UserList users={room.users}/>
        </CardContent>
        <CardActions className={styles.actions}>
            <Button onClick={() => startVoting()} variant="outlined">
                Start voting
            </Button>
            <Button onClick={() => stopVoting()} variant="outlined">
                Stop voting
            </Button>
        </CardActions>
    </Card>
}
