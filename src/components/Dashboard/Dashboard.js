import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardActions, CardContent, CardHeader} from "@material-ui/core";
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import {UserList} from "../UserList/UserList";
import Typography from "@material-ui/core/Typography";
import {$authUser} from "../../models/auth";
import {ControlButtons} from "./ControlButtons";

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
        flexDirection: 'column',
        flexGrow: 1
    }
}));

export const Dashboard = () => {
    const styles = useStyles();
    const {ownerId, voting} = useStore($room);
    const auth = useStore($authUser);
    const isOwner = auth.userId === ownerId;

    return <Card className={styles.root}>
        <CardHeader
            className={styles.header}
            title={
                <Typography
                    align="center"
                    variant="subtitle1"
                    component="h3"
                    className={styles.title}>
                    Voting round started
                </Typography>
            }/>
        <CardContent className={styles.cardContent}>
            <UserList users={voting.users}/>
        </CardContent>
        {isOwner && <CardActions className={styles.actions}>
            <ControlButtons/>
        </CardActions>}
    </Card>
}
