import {sample} from "effector";
import {$wsState} from "../ws";
import {
    $voting,
    sendScore,
    sendScoreFx,
    showResults,
    showResultsFx,
    startVoting,
    startVotingFx,
    stopVoting,
    stopVotingFx,
    updateResults,
    updateScore,
    votingInit,
    votingInitFx,
    votingStarted
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
import * as navigator from "../../utils/navigator";

votingInitFx.use((ws) => {
    ws?.on(VOTING_STARTED, (payload) => {
        console.log('--- VOTING_STARTED ---', payload);
        votingStarted(payload);
    }).on(VOTING_FINISHED, (payload) => {
        console.log('--- VOTING_FINISHED ---', payload);
    }).on(SCORE_DISPATCH, (score) => {
        updateScore(score);
    }).on(DISPATCH_RESULTS, (results) => {
        navigator.vibrate([200, 200]);
        updateResults(results);
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
    ws?.emit(SHOW_RESULTS, {roomId});
});

$voting.on(updateResults, (votingState, results) => ({...votingState, status: 1, results}));
$voting.on(votingStarted, () => ({status: 'Active', results: null}));

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
