import {sample} from "effector";
import {$wsState} from "../ws";
import {sendScoreFx, showResultsFx, startVoting, startVotingFx, stopVotingFx} from "./index";
import {
    ON_SEND_SCORE,
    ON_SHOW_RESULTS,
    ON_VOTING_START,
    ON_VOTING_STOP,
    SEND_SCORE,
    SHOW_RESULTS,
    VOTING_START,
    VOTING_STOP
} from "../../api/ws/events";
import {$room} from "../room";

startVotingFx.use(({ws, roomId}) => {
    ws?.on(ON_VOTING_START, (payload) => {
        console.log('--- ON_VOTING_START ---', payload);
    }).emit(VOTING_START, {roomId});
});

stopVotingFx.use(({ws, roomId}) => {
    ws?.on(ON_VOTING_STOP, () => {

    }).emit(VOTING_STOP, {roomId});
});

sendScoreFx.use(({ws, roomId, score}) => {
    ws?.on(ON_SEND_SCORE, () => {

    }).emit(SEND_SCORE, {roomId});
});

showResultsFx.use(({ws, roomId}) => {
    ws?.on(ON_SHOW_RESULTS, (results) => {

    }).emit(SHOW_RESULTS, {roomId});
});

// $voting.on(startVotingFx, (_, votingState) => votingState);

sample({
    source: {$wsState, $room},
    clock: startVoting,
    fn: ({$wsState, $room}) => ({ws: $wsState.ws, roomId: $room.uid}),
    target: startVotingFx,
});
