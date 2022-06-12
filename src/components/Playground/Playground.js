import React, {useEffect} from 'react';
import {$voting, sendScore} from "../../models/voting";
import {useStore} from "effector-react";
import {VotingResults} from "../VotingResults/VotingResults";
import {CardDeck} from "../CardDeck/CardDeck";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ShareVoting} from "../ShareVoting/ShareVoting";

const useStyles = makeStyles(() => ({
    shareIcon: {
        boxShadow: '0px 0px 4px #ccc'
    }
}));

export const Playground = () => {
    const styles = useStyles();
    const {results} = useStore($voting);

    useEffect(() => {
        if (results) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [results]);

    return <Grid container>
        <Grid className={styles.header} container alignItems="center" justifyContent="space-between">
            <ShareVoting/>
        </Grid>

        <Grid container justifyContent="center">
            {!results
                ? <CardDeck onSelectCard={sendScore}/>
                : <VotingResults data={results}/>
            }
        </Grid>
    </Grid>
}


