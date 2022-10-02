import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
        background: '#FFFFFF'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 250px)',
        margin: "auto",
        background: '#FFFFFF'
    },
}));
