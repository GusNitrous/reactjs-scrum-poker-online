import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";
import {UserBadge} from "./UserBadge";
import {Divider} from "@material-ui/core";

const avatarPlaceholder = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Pink&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Yellow";

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1 1',
    },
}));

export const UserItemList = ({user, hasDivider}) => {
    const styles = useStyles();

    return <>
        <ListItem>
            <ListItemAvatar>
                <UserBadge
                    variant="dot"
                    overlap="circular"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                >
                <Avatar
                    alt={user.name}
                    src={avatarPlaceholder} />
                </UserBadge>
            </ListItemAvatar>
            <ListItemText primary={user.name} className={styles.root}/>
            <ListItemText>13</ListItemText>
        </ListItem>
        {hasDivider && <Divider />}
    </>
}
