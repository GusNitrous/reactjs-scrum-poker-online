import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {makeStyles} from "@material-ui/core/styles";
import {UserBadge} from "./UserBadge";
import {Divider} from "@material-ui/core";
import PropTypes from "prop-types";
import {UserScore} from "./UserScore";

const useStyles = makeStyles(() => ({
    root: {
        flex: '1 1',
        justifyContent: "space-between"
    }
}));

export const UserListItem = ({avatar, username, score, hasDivider}) => {
    const styles = useStyles();

    return <>
        <ListItem className={styles.root}>
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
                        src={avatar}/>
                </UserBadge>
            </ListItemAvatar>
            <ListItemText primary={username}/>
            <UserScore score={score}/>
        </ListItem>
        {hasDivider && <Divider light/>}
    </>
}

UserListItem.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    score: PropTypes.string,
    hasDivider: PropTypes.bool
}
