import React, {useCallback, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {PokerCard} from "./PokerCard";
import {debounce} from "lodash/function";
import * as navigator from "../../utils/navigator";

const SCORES = [
    '?', '0', '0.5', '1',
    '2', '3', '5', '8',
    '13', '20', '40', '100',
];

const useStyles = makeStyles(({breakpoints, ...theme}) => {
    return {
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 'auto',
            // maxWidth: 480,
            [breakpoints.between('lg', 'xl')]: {
                justifyContent: "space-between",
                maxWidth: 'auto',
            },
        },
    }
});

export const CardDeck = ({onSelectCard}) => {
    const styles = useStyles();
    const [selectedScore, setSelectedScore] = useState('');
    const selectScore = useCallback(debounce((score) => {
        navigator.vibrate(100);
        setSelectedScore(score);
        onSelectCard(score);
    }, 250, {leading: true, trailing: false}), []);

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
