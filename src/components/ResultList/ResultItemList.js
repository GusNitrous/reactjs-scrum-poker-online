import React from 'react';
import {Divider, ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flex: '1 1',
        justifyContent: 'space-between'
    },
}));

export const ResultItemList = ({id, avg, hasDivider}) => {
    const styles = useStyles();
    return <div className={styles.root}>
        <ListItem>
            <ListItemText primary={'# ' + id}/>
            <ListItemText>{avg}</ListItemText>
        </ListItem>
        {hasDivider && <Divider light/>}
    </div>
}
