import React from 'react';
import List from '@material-ui/core/List';
import {UserItemList} from "./UserItemList";
import {Card, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    userList: {
        backgroundColor: theme.palette.background.paper,
        marginBottom: '20px',
    },
}));

export const UserList = ({users}) => {
    const styles = useStyles();
    return <Card className={styles.userList}>
        <List>
            {users.map((user, index) => {
                return <>
                    <UserItemList key={user._id} user={user}/>
                    {index+1 !== users.length && <Divider />}
                </>
            })}
        </List>
    </Card>


}
