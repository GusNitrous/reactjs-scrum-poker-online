import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    headerContainer: {
        display: 'flex',
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
}));
