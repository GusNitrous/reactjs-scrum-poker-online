import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    card: {
        marginTop: '25px',
        marginBottom: '25px',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 5,
        backgroundColor: '#6b74b1'
    },
    submit: {
        margin: '2, 0, 2'
    },
}));
