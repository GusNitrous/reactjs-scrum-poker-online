import React from "react";
import {Button} from "@material-ui/core";
import {showResults, startVoting} from "../../models/voting";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    item: {
        flexGrow: 1,
        width: '100%'
    },
    btn: {
        width: '100%'
    }
}));

export const ControlButtons = () => {
    const styles = useStyles();
    return <Grid container spacing={1}>
        <Grid className={styles.item} item xs={12}>
            <Button
                variant="contained"
                color="primary"
                className={styles.btn}
                onClick={() => startVoting()}>
                New voting
            </Button>
        </Grid>

        <Grid item className={styles.item} xs={12}>
            <Button
                color="primary"
                variant="outlined"
                className={styles.btn}
                onClick={() => showResults()}>
                Show results
            </Button>
        </Grid>
    </Grid>
}
