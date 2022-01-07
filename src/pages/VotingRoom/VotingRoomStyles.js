import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: '10px',
    },
    form: {
        width: '100%',
        marginTop: '10px',
    },
    submit: {
        margin: '2, 0, 2',
    },

}));
