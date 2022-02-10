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
        flex: '1',
        justifyContent: "space-between"
    },
    itemText: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

export const UserItemList = ({avatar, username, score, isShowScore, hasDivider}) => {
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
            <ListItemText className={styles.itemText}>
                {isShowScore ? score : '+'}
            </ListItemText>
        </ListItem>
        {hasDivider && <Divider/>}
    </>
}

UserItemList.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    score: PropTypes.string,
    hasDivider: PropTypes.bool
}
