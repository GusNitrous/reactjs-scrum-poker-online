import {createEffect, createEvent, createStore} from "effector";

export const createRoom = createEvent();

export const onCreateRoom = createEvent();

export const joinToRoom = createEvent();

// export const joinToRoom = createEvent();

export const onJoinToRoom = createEvent();

export const createRoomFx = createEffect();

export const joinToRoomFx = createEffect();

export const $room = createStore({
    id: null,
    ownerId: null,
    createdAt: null,
    voting: {
        status: null,
        users: [],
    },
});
