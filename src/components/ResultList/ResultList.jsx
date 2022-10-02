import React from 'react';
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {ResultListItem} from "./ResultListItem";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSoftRiseShadowStyles} from '@mui-treasury/styles/shadow/softRise';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import cx from 'clsx';

const useStyles = makeStyles(({spacing}) => ({
    root: {
        marginTop: spacing(4),
        borderRadius: spacing(1),
    },
    content: {
        width: "100%",
        padding: 15,
        maxHeight: 750,
        overflowY: "auto"
    }
}));

export const ResultList = () => {
    const styles = useStyles();
    const {results} = useStore($room);
    const cardShadowStyles = useSoftRiseShadowStyles({inactive: true});
    const total = results.length;
    const avg = Math.ceil(results.reduce((acc, res) => (acc += res.avg), 0) / total);

    return !results.length ? null : <Grid>
        <Card className={cx(styles.root, cardShadowStyles.root)}>
            <MuiAccordion>
                <MuiAccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <CardHeader
                        className={styles.header}
                        title={
                            <Typography
                                align="left"
                                variant="h5"
                                component="h2">
                                {`Latest results: ${total} / ${avg}`}
                            </Typography>
                        }/>
                </MuiAccordionSummary>

                <MuiAccordionDetails>
                    <CardContent className={styles.content}>
                        <List>
                            {results.map((result, index) =>
                                <ResultListItem
                                    key={result.roundId}
                                    id={result.roundId}
                                    avg={result.avg}
                                    hasDivider={index % 2 === 0}
                                />
                            )}
                        </List>
                    </CardContent>
                </MuiAccordionDetails>
            </MuiAccordion>
        </Card>
    </Grid>
}
