import React from 'react';
import {$voting, sendScore} from "../../models/voting";
import {useStore} from "effector-react";
import {VotingResults} from "../VotingResults/VotingResults";
import {CardDeck} from "../CardDeck/CardDeck";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import {$room} from "../../models/room";
import {Button, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    header: {
        marginBottom: 15,
        paddingRight: 12,
    },
    shareIcon: {
        boxShadow: '0px 0px 4px #ccc'
    }
}));

export const Playground = () => {
    const styles = useStyles();
    const {results} = useStore($voting);
    const {id: roomId} = useStore($room);
    return <Grid container>
        <Grid className={styles.header} container alignItems="center" justifyContent="space-between">
            <Button size="large" type="text" endIcon={<FileCopyIcon/>}>
                Room: {roomId}
            </Button>
        </Grid>

        <Grid container justifyContent="center">
            {!results ? <CardDeck onSelectCard={sendScore}/> : <VotingResults data={results}/>}
        </Grid>
    </Grid>
}
