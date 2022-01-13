import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        // width: 100,
        // height: 140,
        borderRadius: 4,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // margin: 5,
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
