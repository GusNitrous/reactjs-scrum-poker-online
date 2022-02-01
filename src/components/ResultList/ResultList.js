import React from 'react';
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import {ResultItemList} from "./ResultItemList";

export const ResultList = () => {
    const room = useStore($room);
    const results = room.latestResults;
    return !results.length ? null : <Grid>
        <Typography variant="subtitle1" component="h2">
            Latest results
        </Typography>
        <List>
            {results.map((result, index) =>
                <ResultItemList
                    key={index}
                    id={index + 1}
                    avg={result.avg}
                    hasDivider={index + 1 !== results.length}
                />
            )}
        </List>
    </Grid>
}
