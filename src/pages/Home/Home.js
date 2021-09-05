import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { QuickStart } from '../../components/QuickStart/QuickStart';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainGrid: {
    padding: 15,
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

/**
 * HomePage.
 */
export function Home() {
  const classes = useStyles();
  return (
      <Grid
        container 
        direction="column" 
        justifyContent="center"
        alignItems="center"
        className={classes.mainGrid}>
            <QuickStart />
      </Grid>
  );
}
