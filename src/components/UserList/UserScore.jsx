import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useStore} from "effector-react";
import {$voting} from "../../models/voting";


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: '#6877ad'
    },
    score: {
        background: '#ff8383',
        color: '#fff',
        width: 32,
        height: 32,
        borderRadius: '100%',
        lineHeight: '32px',
        textAlign: 'center',
        fontSize: 15
    }
}));

export const UserScore = ({score}) => {
    const styles = useStyles();
    const {results} = useStore($voting);
    const isShowScore = !!results;

    const scoreDisplay = score && isShowScore
        ? <div className={styles.score}>{score}</div>
        : (!score
            // TODO using animation
            ? "N/A"
            : <CheckCircleIcon color="inherit"/>);

    return <ListItemText className={styles.root}>
        {scoreDisplay}
    </ListItemText>
}
