import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
        spacing={5} 
        direction="column" 
        justifyContent="center"
        alignItems="center"
        className={classes.mainGrid}>
          <div>Join to the room</div>
          <TextField label="Room id" variant="outlined"/>
          <div>or</div>   
          <div>  
            <Button variant="outlined" size="medium">
              Create new room
            </Button>
          </div>
      </Grid>
  );
}
