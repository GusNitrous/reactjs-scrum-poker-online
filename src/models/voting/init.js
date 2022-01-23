import {sample} from "effector";
import {$wsState} from "../ws";
import {
    sendScore,
    sendScoreFx,
    showResults,
    showResultsFx,
    startVoting,
    startVotingFx,
    stopVoting,
    stopVotingFx,
    votingInit,
    votingInitFx
} from "./index";
import {
    DISPATCH_RESULTS,
    SCORE_DISPATCH,
    SEND_SCORE,
    SHOW_RESULTS,
    VOTING_FINISH,
    VOTING_FINISHED,
    VOTING_START,
    VOTING_STARTED,
} from "../../api/ws/events";
import {$room} from "../room";

votingInitFx.use((ws) => {
    console.log('--- voting_init ---', ws);

    ws?.on(VOTING_STARTED, (payload) => {
        console.log('--- VOTING_STARTED ---', payload);
    }).on(VOTING_FINISHED, (payload) => {
        console.log('--- VOTING_FINISHED ---', payload);
    }).on(SCORE_DISPATCH, (score) => {
        console.log('--- SCORE_DISPATCH ---', score);
    }).on(DISPATCH_RESULTS, (results) => {
        console.log('--- DISPATCH_RESULTS ---', results);
    });
});

startVotingFx.use(({ws, roomId}) => {
    ws?.emit(VOTING_START, {roomId});
});

stopVotingFx.use(({ws, roomId}) => {
    ws?.emit(VOTING_FINISH, {roomId});
});

sendScoreFx.use(({ws, roomId, score}) => {
    ws?.emit(SEND_SCORE, {roomId, score});
});

showResultsFx.use(({ws, roomId}) => {
    ws?.once(DISPATCH_RESULTS, (results) => {
        console.log('--- DISPATCH_RESULTS ---', results);
    }).emit(SHOW_RESULTS, {roomId});
});

// $voting.on(startVotingFx, (_, votingState) => votingState);

sample({
    source: $wsState,
    clock: votingInit,
    fn: (wsState) => wsState.ws,
    target: votingInitFx,
});

sample({
    source: {$wsState, $room},
    clock: startVoting,
    fn: ({$wsState, $room}) => ({ws: $wsState.ws, roomId: $room.id}),
    target: startVotingFx,
});

sample({
    source: {$wsState, $room},
    clock: stopVoting,
    fn: ({$wsState, $room}) => ({ws: $wsState.ws, roomId: $room.id}),
    target: stopVotingFx,
});

sample({
    source: {$wsState, $room},
    clock: sendScore,
    fn: ({$wsState, $room}, score) => ({ws: $wsState.ws, roomId: $room.id, score}),
    target: sendScoreFx,
});

sample({
    source: {$wsState, $room},
    clock: showResults,
    fn: ({$wsState, $room}) => ({ws: $wsState.ws, roomId: $room.id}),
    target: showResultsFx,
});
