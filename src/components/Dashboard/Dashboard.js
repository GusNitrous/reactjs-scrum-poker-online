import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardContent, CardHeader, IconButton} from "@material-ui/core";
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import {UserList} from "../UserList/UserList";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        backgroundColor: '#2d8dc5',
        color: '#fff',
    },
    title: {
        textTransform: 'uppercase'
    }
}));

export const Dashboard = () => {
    const styles = useStyles();
    const room = useStore($room);
    return <Card className={styles.root}>
        <CardHeader
            className={styles.header}
            title={
                <Typography align="center" className={styles.title} variant="h6" component="h3">
                    Voting users
                </Typography>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
            }/>
        <CardContent>
            <UserList users={room.users}/>
        </CardContent>
    </Card>
}
