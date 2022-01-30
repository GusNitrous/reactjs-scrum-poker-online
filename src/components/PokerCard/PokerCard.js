import React from 'react';
import {Button, Paper, Typography} from "@material-ui/core";
import {useStyles} from "./PokerCardStyles";

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
