import React from "react";
import {Chip, Divider, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "./VotingResultStyles";

export const VotingResults = ({data}) => {
    const styles = useStyles();
    return <Paper className={styles.root}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography
                    component='h2'
                    variant="h4"
                    align="center">
                    Average
                </Typography>

            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" align="center">
                    <Chip color="primary" label={<h3>{data.avg}</h3>}/>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" align="center">
                    Max: {data.max}
                </Typography>
                <Divider/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" align="center">
                    Min: {data.min}
                </Typography>
                <Divider/>
            </Grid>
        </Grid>
    </Paper>
}
