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
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import cx from 'clsx';


const useStyles = makeStyles(({palette, breakpoints, spacing}) => ({
    root: {
        width: '100%',
        marginTop: spacing(10),
        paddingTop: 10,
        backgroundColor: palette.background.paper,
        position: 'relative',
        borderRadius: spacing(1),
        boxShadow: '0 6px 20px 0 #dbdbe8',
        overflow: 'initial',
        [breakpoints.between('lg', 'xl')]: {
            marginTop: 82,
        },
    },
    header: {
        background: 'linear-gradient(to right, #5175B4, #FF8383)',
        borderRadius: spacing(1),
        width: '80%',
        textAlign: 'center',
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
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
    const cardHeaderShadowStyles = useFadedShadowStyles();

    const {id: roomId, ownerId, voting} = useStore($room);
    const auth = useStore($authUser);
    const isOwner = auth.userId === ownerId;

    return <>
        <Card className={cx(styles.root, shadowStyles.root)}>
            {/* <CardHeader
                className={styles.header}
                title={
                    <Typography
                        align="center"
                        variant="overline"
                        component="h3"
                        className={styles.title}>
                        Voting started
                    </Typography>
                }
            /> */}


            <CardHeader
                className={cx(cardHeaderShadowStyles.root, styles.header)}
                classes={cardHeaderStyles}
                title='Voting started'
                // subheader={'In reversed order'}
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
