import React from "react";
import {Button} from "@material-ui/core";
import {$voting, showResults, startVoting} from "../../models/voting";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useStore} from "effector-react";
import cx from 'clsx';

const useStyles = makeStyles(() => ({
    root: {},
    grid: {
        flexGrow: 1,
        width: '100%'
    },
}));

export const VotingActions = () => {
    const styles = useStyles();
    const {results} = useStore($voting);
    
    return <Grid className={styles.root} container spacing={3}>
        <Grid item className={styles.grid} xs={12}>
            {
                !results ?
                    <Button
                        fullWidth
                        disableElevation
                        disabled={!!results}
                        variant="contained"
                        className={cx("MuiButton--gradient MuiButton--gradient-label")}
                        onClick={() => showResults()}>
                        Show results
                    </Button>
                    :
                    <Button
                        fullWidth
                        color="primary"
                        onClick={() => startVoting()}>
                        New voting
                    </Button>
            }
        </Grid>
    </Grid>
}
