import {forward} from "effector";
import {history} from "../../utils/routing";
import {createRoom, joinToRoom, roomCreatedFx, userJoinedFx} from "./index";
import {CREATE_ROOM, JOIN_USER, ROOM_CREATED, USER_JOINED} from "../../api/ws/events";

roomCreatedFx.use((ws) => {
    ws?.on(ROOM_CREATED, (roomId) => {
        //TODO формировать маршрут через хелпер
        history.push(`/room/${roomId}`);
        console.log('created room', roomId);
    }).emit(CREATE_ROOM);
});

userJoinedFx.use(({ws, roomId}) => {
    ws?.on(USER_JOINED, (roomId) => {
        console.log('user joined', roomId);
    }).emit(JOIN_USER, {roomId});
});

forward({
    from: createRoom,
    to: roomCreatedFx,
});

forward({
    from: joinToRoom,
    to: userJoinedFx,
});
