import React from "react";
import {Divider, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {useOverShadowStyles} from '@mui-treasury/styles/shadow/over';
import cx from 'clsx';

const useStyles = makeStyles(({spacing}) => ({
    root: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        padding: 45,
        borderRadius: spacing(1),
        boxShadow: '0 6px 20px 0 #dbdbe8',
        width: '100%'
    },
    score: {
        textAlign: 'center',
        fontSize: 58,
        width: 120,
        height: 120,
        margin: 'auto',
        lineHeight: '112px',
        borderRadius: '100%',
        color: '#5275b4',
        border: 'solid 5px #fe8383'
    }
}));

export const VotingResults = ({data}) => {
    const styles = useStyles();
    const shadowStyles = useOverShadowStyles();

    return <Paper className={cx(styles.root, shadowStyles.root)}>
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
                <div className={styles.score}>
                    {data.avg}
                </div>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" align="center">
                    Max: {data.max}
                </Typography>
                <Divider light/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="subtitle1" align="center">
                    Min: {data.min}
                </Typography>
                <Divider light/>
            </Grid>
        </Grid>
    </Paper>
}
