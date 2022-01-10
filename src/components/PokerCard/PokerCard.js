import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        width: 70,
        height: 100,
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: 0
    },
    score: {
        height: "100%",
        minWidth: "100%",
    },
}));

export const PokerCard = ({score}) => {
    const styles = useStyles();
    return <Paper elevation={1} className={styles.root}>
        <Button className={styles.score}>
            <Typography>
                {score}
            </Typography>
        </Button>
    </Paper>
}
