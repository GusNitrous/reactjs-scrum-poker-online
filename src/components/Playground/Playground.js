import React from 'react';
import {PokerCard} from "../PokerCard/PokerCard";
import {makeStyles} from "@material-ui/core/styles";

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

/**
 * Playground component.
 */
export const Playground = () =>  {
    const styles = useStyles();
	return <div className={styles.root}>
        {SCORES.map((score, index) => <PokerCard key={index} score={score} />)}
    </div>
}
