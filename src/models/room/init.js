import {sample} from "effector";
import {history} from "../../utils/routing";
import {$room, createRoom, createRoomFx, joinToRoom, joinToRoomFx, onJoinToRoom} from "./index";
import {CREATE_ROOM, JOIN_USER, ROOM_CREATED, USER_JOINED, USER_JOINED_TO_ROOM} from "../../api/ws/events";
import {$wsState} from "../ws";

createRoomFx.use((ws) => {
    ws?.on(ROOM_CREATED, (roomId) => {
        //TODO формировать маршрут через хелпер
        history.push(`/room/${roomId}`);
    }).emit(CREATE_ROOM);
});

joinToRoomFx.use(({ws, roomId}) => {
    ws?.on(USER_JOINED_TO_ROOM, onJoinToRoom)
        .on(USER_JOINED, onJoinToRoom)
        .emit(JOIN_USER, {roomId});
});

$room.on(onJoinToRoom, (_, roomState) => roomState);

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
