import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Chip} from "@material-ui/core";
import {useStore} from "effector-react";
import {$voting} from "../../models/voting";


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'end',
    }
}));

export const UserScore = ({score}) => {
    const styles = useStyles();
    const {results} = useStore($voting);
    const isShowScore = !!results;

    const scoreDisplay = score && isShowScore
        ? <Chip color="primary" label={score}/>
        : (!score
            // TODO using animation
            ? "N/A"
            : <CheckCircleIcon color="primary"/>);

    return <ListItemText className={styles.root}>
        {scoreDisplay}
    </ListItemText>
}
