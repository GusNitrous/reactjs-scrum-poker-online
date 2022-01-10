import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";
import {UserBadge} from "./UserBadge";
import {Divider} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1 1',
    },
}));

export const UserItemList = ({avatar, username, score, hasDivider}) => {
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
                    alt={username}
                    src={avatar} />
                </UserBadge>
            </ListItemAvatar>
            <ListItemText primary={username} className={styles.root}/>
            <ListItemText>{score}</ListItemText>
        </ListItem>
        {hasDivider && <Divider />}
    </>
}

UserItemList.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    score: PropTypes.string,
    hasDivider: PropTypes.bool
}
