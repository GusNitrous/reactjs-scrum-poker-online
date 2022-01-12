import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import {UserList} from "../UserList/UserList";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "3%",
        backgroundColor: theme.palette.background.paper,
    },
}));

export const Dashboard = () => {
    const styles = useStyles();
    const room = useStore($room);
    return <Card className={styles.root}>
        <CardHeader>
            <h4>Voting Status</h4>
        </CardHeader>
        <CardContent>
            <UserList users={room.users}/>
        </CardContent>
    </Card>
}
