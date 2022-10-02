import {withStyles} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";

export const UserBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#FF8383',
        color: '#FF8383',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
}))(Badge);
