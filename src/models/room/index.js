import {createEffect, createEvent, createStore} from "effector";

export const createRoom = createEvent();

export const onCreateRoom = createEvent();

export const joinToRoom = createEvent();

export const onJoinToRoom = createEvent();

export const leaveFromRoom = createEvent();

export const onLeaveFromRoom = createEvent();

export const leaveRoomFx = createEffect();

export const createRoomFx = createEffect();

export const joinToRoomFx = createEffect();

export const initRoomState = {
    id: null,
    ownerId: null,
    createdAt: null,
    results: [],
    voting: {
        status: null,
        users: [],
    },
};

export const $room = createStore(initRoomState);
