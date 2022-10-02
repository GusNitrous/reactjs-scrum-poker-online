import React from 'react';
import {ListItem} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {makeStyles} from "@material-ui/core/styles";
import cx from 'clsx';


const useStyles = makeStyles(({spacing}) => ({
    root: {
        flex: '1 1',
        justifyContent: 'space-around',
        borderRadius: 8
    },
    item: {
        borderRadius: spacing(1)
    },
    result: {
        width: 28,
        height: 28,
        lineHeight: '28px',
        textAlign: 'center',
        borderRadius: '100%',

    },
    marked: {
        background: '#f7f7f7'
    }
}));

export const ResultListItem = ({id, avg, hasDivider}) => {
    const styles = useStyles();
    return <div className={styles.root}>
        <ListItem className={cx(styles.item, hasDivider ? styles.marked : '')}>
            <ListItemText primary={'# ' + id}/>
            <div className={styles.result}>
                {avg}
            </div>
        </ListItem>
    </div>
}
