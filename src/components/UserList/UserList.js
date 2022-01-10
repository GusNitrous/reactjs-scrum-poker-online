import React from 'react';
import List from '@material-ui/core/List';
import {UserItemList} from "./UserItemList";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    userList: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: '20px',
    },
}));

export const UserList = ({users}) => {
    const styles = useStyles();
    return <Paper className={styles.userList}>
        <List>
            {users.map((user, index) => <UserItemList
                    key={user._id}
                    user={user}
                    hasDivider={index+1 !== users.length}
                />
            )}
        </List>
    </Paper>
}
