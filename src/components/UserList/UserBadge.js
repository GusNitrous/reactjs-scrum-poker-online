import {withStyles} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";

export const UserBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
}))(Badge);
