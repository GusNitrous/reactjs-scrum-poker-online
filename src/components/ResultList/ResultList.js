import React from 'react';
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {ResultListItem} from "./ResultListItem";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import cx from 'clsx';

const useStyles = makeStyles(({spacing}) => ({
    root: {
      marginTop: spacing(4),  
      borderRadius: spacing(1),
    },
    header: {
        borderBottom: '1px solid #f2f2f2',
    },
    content: {
        padding: 15
    }
}));

export const ResultList = () => {
    const styles = useStyles();
    const {results} = useStore($room);
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });

    return !results.length ? null : <Grid>
        <Card className={cx(styles.root, cardShadowStyles.root)}>
            <CardHeader
                className={styles.header}
                title={
                    <Typography
                        align="left"
                        variant="h5"
                        component="h2">
                        Latest results
                    </Typography>
                }/>
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

        </Card>
    </Grid>
}
