import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {PokerCard} from "./PokerCard";

const SCORES = [
    '?', '0', '0.5', '1',
    '2', '3', '5', '8',
    '13', '20', '40', '100',
];

const useStyles = makeStyles(({breakpoints}) => {
    return {
        root: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 'auto',
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
    const selectScore = (score) => {
        setSelectedScore(score);
        onSelectCard(score);
    };

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
