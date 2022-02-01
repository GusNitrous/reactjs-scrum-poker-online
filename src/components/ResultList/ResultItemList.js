import React from 'react';
import {Divider, ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1 1',
    },
}));

export const ResultItemList = ({id, avg, hasDivider}) => {
    const styles = useStyles();
    return <>
        <ListItem>
            <ListItemText primary={id} className={styles.root}/>
            <ListItemText>{avg}</ListItemText>
        </ListItem>
        {hasDivider && <Divider/>}
    </>
}
