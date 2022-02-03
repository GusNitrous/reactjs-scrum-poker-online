import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: 60,
        height: 90,
        margin: 10,
        padding: 0
    },
    score: {
        height: "100%",
        minWidth: "100%",
    },
}));

export const PokerCard = ({score, isSelected, select}) => {
    const styles = useStyles();
    return <Paper elevation={isSelected ? 2 : 0} className={styles.root}>
        <Button
            color={isSelected ? "primary" : "default"}
            variant={isSelected ? "contained" : "outlined"}
            onClick={() => select(score)}
            className={styles.score}>
            <Typography>
                {score}
            </Typography>
        </Button>
    </Paper>

}
