import React from 'react';
import List from '@material-ui/core/List';
import {UserItemList} from "./UserItemList";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const avatar = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Pink&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Yellow";

const useStyles = makeStyles((theme) => ({
    userList: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export const UserList = ({users}) => {
    const styles = useStyles();
    return <Paper className={styles.userList}>
        <List>
            {users.map((user, index) => <UserItemList
                    key={user._id}
                    username={user.name}
                    avatar={avatar}
                    score="13"
                    hasDivider={index+1 !== users.length}
                />
            )}
        </List>
    </Paper>
}
