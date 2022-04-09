import React from 'react';
import {$voting, sendScore} from "../../models/voting";
import {useStore} from "effector-react";
import {VotingResults} from "../VotingResults/VotingResults";
import {CardDeck} from "../CardDeck/CardDeck";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ShareVoting} from "../ShareVoting/ShareVoting";


export const Playground = () => {
    const styles = useStyles();
    const {results} = useStore($voting);

    return <Grid container>
        <Grid className={styles.header} container alignItems="center" justifyContent="space-between">
            <ShareVoting/>
        </Grid>

        <Grid container justifyContent="center">
            {!results ? <CardDeck onSelectCard={sendScore}/> : <VotingResults data={results}/>}
        </Grid>
    </Grid>
}

const useStyles = makeStyles(() => ({
    header: {
        // marginBottom: 10,
        // paddingRight: 12,
    },
    shareIcon: {
        boxShadow: '0px 0px 4px #ccc'
    }
}));
