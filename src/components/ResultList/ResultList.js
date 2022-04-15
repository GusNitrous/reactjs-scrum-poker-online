import React from 'react';
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {ResultItemList} from "./ResultItemList";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useOverShadowStyles} from '@mui-treasury/styles/shadow/over';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';

const useStyles = makeStyles(({spacing, palette}) => ({
    root: {
      marginTop: spacing(4),  
      borderRadius: spacing(1),
    },
    header: {
        // backgroundColor: '#ccc',
        borderBottom: `1px solid ${palette.divider}`,
        // padding: 12
    },
}));

export const ResultList = () => {
    const styles = useStyles();
    const {results} = useStore($room);
    const shadowStyles = useOverShadowStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
    const cardHeaderShadowStyles = useFadedShadowStyles();

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

                {/* <CardHeader
                    className={cx(cardHeaderShadowStyles.root, styles.header)}
                    classes={cardHeaderStyles}
                    title='Latest results'
                    subheader={'In reversed order'}
                /> */}
            <CardContent>
                <List>
                    {results.map((result, index) =>
                        <ResultItemList
                            key={result.roundId}
                            id={result.roundId}
                            avg={result.avg}
                            hasDivider={index + 1 !== results.length}
                        />
                    )}
                </List>
            </CardContent>

        </Card>
    </Grid>
}
