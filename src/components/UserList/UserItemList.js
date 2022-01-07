import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import {makeStyles} from "@material-ui/core/styles";
import {Divider, withStyles} from "@material-ui/core";

const avatarPlaceholder = "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Blue&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Pink&eyeType=Close&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Yellow";

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1 1',
    },
}));

export const UserItemList = ({user}) => {
    const styles = useStyles();

    return <ListItem>
        <ListItemAvatar>
            <StyledBadge
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
            </StyledBadge>
        </ListItemAvatar>
        <ListItemText primary={user.name} className={styles.root}/>
        <ListItemText>13</ListItemText>
    </ListItem>
}
