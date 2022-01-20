import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import {useStyles} from "./PokerCardStyles";

export const PokerCard = ({score, isSelected, select}) => {
    const styles = useStyles();
    return <Paper elevation={1} className={styles.root}>
        <Button
            color={isSelected ? "primary" : "default"}
            variant="contained"
            onClick={() => select(score)}
            className={styles.score}>
            <Typography>
                {score}
            </Typography>
        </Button>
    </Paper>

}
