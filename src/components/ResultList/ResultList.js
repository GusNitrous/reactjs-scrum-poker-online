import React from 'react';
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {ResultItemList} from "./ResultItemList";
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: '#f2f2f6',
        // color: '#fff',
        padding: 12
    },
}));

export const ResultList = () => {
    const styles = useStyles();
    const {results} = useStore($room);
    return !results.length ? null : <Grid>
        <Card>
            <CardHeader
                className={styles.header}
                title={
                    <Typography
                        align="center"
                        variant="subtitle1"
                        component="h3">
                        Latest results
                    </Typography>
                }/>
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
        {/*<Typography variant="subtitle1" component="h2">*/}
        {/*    Latest results*/}
        {/*</Typography>*/}
    </Grid>
}
