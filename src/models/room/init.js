import {sample} from "effector";
import {history} from "../../utils/routing";
import {$room, createRoom, createRoomFx, joinToRoom, joinToRoomFx, onJoinToRoom} from "./index";
import {CREATE_ROOM, JOIN_USER, ROOM_CREATED, USER_JOINED, USER_JOINED_TO_ROOM, USER_LEAVE} from "../../api/ws/events";
import {$wsState} from "../ws";
import {updateScore, userLeave, votingInit, votingStarted} from "../voting";

createRoomFx.use((ws) => {
    ws?.on(ROOM_CREATED, (roomId) => {
        //TODO using route helper
        history.push(`/room/${roomId}`);
    }).emit(CREATE_ROOM);
});

joinToRoomFx.use(({ws, roomId}) => {
    ws?.on(USER_JOINED, (roomState) => {
        onJoinToRoom(roomState);
        votingInit();
    }).on(USER_JOINED_TO_ROOM, onJoinToRoom)
        .on(USER_LEAVE, userLeave)
        .emit(JOIN_USER, {roomId});
});

$room.on(onJoinToRoom, (_, roomState) => roomState);
$room.on(votingStarted, (_, roomState) => roomState);
$room.on(updateScore, (roomState, score) => {
    return {
        ...roomState,
        voting: {
            ...roomState.voting,
            users: roomState.voting.users.map((user) => {
                if (user.id === score.userId) {
                    user.score = score.value;
                }
                return user;
            })
        }
    }
});

$room.on(userLeave, ({voting, ...room}, userId) => {
    return {
        ...room,
        voting: {
            ...voting,
            users: voting.users.filter(({id}) => id !== userId)
        }
    }
});

sample({
    source: $wsState,
    clock: createRoom,
    fn: ({ws}) => ws,
    target: createRoomFx,
});

sample({
    source: $wsState,
    clock: joinToRoom,
    fn: ({ws}, roomId) => ({ws, roomId}),
    target: joinToRoomFx,
});
