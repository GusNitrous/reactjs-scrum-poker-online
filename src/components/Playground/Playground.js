import React from 'react';
import {$voting, sendScore} from "../../models/voting";
import {useStore} from "effector-react";
import {VotingResults} from "../VotingResults/VotingResults";
import {CardDeck} from "../CardDeck/CardDeck";


export const Playground = () => {
    const {results} = useStore($voting);
    return !results
        ? <CardDeck onSelectCard={sendScore}/>
        : <VotingResults data={results}/>
}
