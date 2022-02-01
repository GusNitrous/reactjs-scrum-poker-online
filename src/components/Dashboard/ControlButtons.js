import React from "react";
import {Button} from "@material-ui/core";
import {$voting, showResults, startVoting} from "../../models/voting";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useStore} from "effector-react";

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
    const {results} = useStore($voting);
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
                disabled={!!results}
                color="primary"
                variant="outlined"
                className={styles.btn}
                onClick={() => showResults()}>
                Show results
            </Button>
        </Grid>
    </Grid>
}
