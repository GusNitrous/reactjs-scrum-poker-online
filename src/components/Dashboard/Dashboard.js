import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardActions, CardContent, CardHeader, Divider} from "@material-ui/core";
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import {UserList} from "../UserList/UserList";
import Typography from "@material-ui/core/Typography";
import {$authUser} from "../../models/auth";
import {VotingActions} from "./VotingActions";
import {BottomPanel} from "./BottomPanel";
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import cx from 'clsx';


export const Dashboard = () => {
    const styles = useStyles();
    const shadowStyles = useOverShadowStyles();

    const {id: roomId, ownerId, voting} = useStore($room);
    const auth = useStore($authUser);
    const isOwner = auth.userId === ownerId;

    return <>
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardHeader
                className={styles.header}
                title={
                    <Typography
                        align="center"
                        variant="overline"
                        component="h3"
                        className={styles.title}>
                        Voting round started
                    </Typography>
                }
            />
            <CardContent className={styles.cardContent}>
                <UserList users={voting.users}/>
            </CardContent>
            <CardActions className={styles.actions}>
                {isOwner && <VotingActions/>}
            </CardActions>
            <Divider/>
            <BottomPanel roomId={roomId}/>
        </Card>
    </>
}

const useStyles = makeStyles(({palette, breakpoints, spacing}) => ({
    root: {
        width: '100%',
        backgroundColor: palette.background.paper,
        position: 'relative',
        borderRadius: spacing(1),
        boxShadow: '0 6px 20px 0 #dbdbe8',
        [breakpoints.between('lg', 'xl')]: {
            marginTop: 52,
        },
    },
    header: {
        backgroundColor: '#5d82c7',
        color: '#fafafa',
        padding: 12
    },
    title: {
        fontSize: 14,
    },
    cardContent: {
        padding: 10
    },
    actions: {
        padding: 25,
        flexDirection: 'column',
        flexGrow: 1
    }
}));
