import React from "react";
import {Button} from "@material-ui/core";
import {$voting, showResults, startVoting} from "../../models/voting";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useStore} from "effector-react";

const useStyles = makeStyles((theme) => ({
    root: {},
    grid: {
        flexGrow: 1,
        width: '100%'
    },
    btn: {
        width: '100%'
    }
}));

// SharedVoting

export const VotingActions = () => {
    const styles = useStyles();
    const {results} = useStore($voting);
    return <Grid className={styles.root} container spacing={3}>
        <Grid item className={styles.grid} xs={12}>
            {
                !results ?
                    <Button
                        disableElevation
                        disabled={!!results}
                        color="primary"
                        variant="contained"
                        className={styles.btn}
                        onClick={() => showResults()}>
                        Show results
                    </Button>
                    :
                    <Button
                        variant="outlined"
                        color="primary"
                        className={styles.btn}
                        onClick={() => startVoting()}>
                        New voting
                    </Button>
            }
        </Grid>
    </Grid>
}
