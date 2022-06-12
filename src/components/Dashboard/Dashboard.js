import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, CardActions, CardContent, CardHeader, Divider} from "@material-ui/core";
import {useStore} from "effector-react";
import {$room} from "../../models/room";
import {$voting} from "../../models/voting";
import {UserList} from "../UserList/UserList";
import {$authUser} from "../../models/auth";
import {VotingActions} from "./VotingActions";
import {BottomPanel} from "./BottomPanel";
import {useOverShadowStyles} from '@mui-treasury/styles/shadow/over';
import {useContainedCardHeaderStyles} from '@mui-treasury/styles/cardHeader/contained';
import {useFadedShadowStyles} from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';


const useStyles = makeStyles(({palette, spacing}) => ({
    root: {
        width: '100%',
        marginTop: 58,
        paddingTop: 10,
        backgroundColor: palette.background.paper,
        position: 'relative',
        borderRadius: spacing(1),
        boxShadow: '0 6px 20px 0 #dbdbe8',
        overflow: 'initial',
    },
    header: {
        backgroundSize: '200% 200%',
        backgroundImage: 'linear-gradient(to right, #5175B4, #FF8383)',
        transition: 'all 0.5s ease-in-out 0s',
        borderRadius: spacing(1),
        width: '80%',
        textAlign: 'center',
    },
    finished: {
        backgroundSize: '100% 100%',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
    },
    actions: {
        padding: 25,
        flexDirection: 'column',
        flexGrow: 1,
    },
}));

export const Dashboard = () => {
    const styles = useStyles();
    const shadowStyles = useOverShadowStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardHeaderShadowStyles = useFadedShadowStyles();

    const {results} = useStore($voting);
    const {id: roomId, ownerId, voting} = useStore($room);
    const currentUser = useStore($authUser);
    const isOwner = currentUser.userId === ownerId;
    const isShowScore = !!results;

    const headerStyles = isShowScore
        ? cx(cardHeaderShadowStyles.root, styles.header, styles.finished)
        : cx(cardHeaderShadowStyles.root, styles.header)

    return <>
        <Card className={cx(styles.root, shadowStyles.root)}>
            <CardHeader
                className={headerStyles}
                classes={cardHeaderStyles}
                title={isShowScore ? 'Voting finished' : 'Voting started'}
            />

            <CardContent className={styles.cardContent}>
                <UserList
                    currentUser={currentUser}
                    users={voting.users}
                />
            </CardContent>
            <CardActions className={styles.actions}>
                {isOwner && <VotingActions/>}
            </CardActions>
            <Divider light/>
            <BottomPanel roomId={roomId}/>
        </Card>
    </>
}
