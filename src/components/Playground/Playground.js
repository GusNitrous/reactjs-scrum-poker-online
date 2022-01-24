import React, {useState} from 'react';
import {PokerCard} from "../PokerCard/PokerCard";
import {makeStyles} from "@material-ui/core/styles";
import {sendScore} from "../../models/voting";
import {debounce} from "lodash/function";

const SCORES = [
    '?',
    '0',
    '0.5',
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '20',
    '40',
    '100',
];

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            margin: 'auto',
            maxWidth: 460
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }
});

export const Playground = () => {
    const styles = useStyles();
    const [selectedScore, setSelectedScore] = useState('');
    const selectScore = debounce((score) => {
        setSelectedScore(score);
        sendScore(score);
    }, 250);
    return <div className={styles.root}>
        {SCORES.map((score, index) =>
            <PokerCard
                key={index}
                select={selectScore}
                isSelected={selectedScore === score}
                score={score}
            />
        )}
    </div>
}
