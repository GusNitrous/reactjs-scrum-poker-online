import {createEffect, createEvent, createStore} from "effector";

export const createRoom = createEvent();

// export const roomCreated = createEvent();

export const joinToRoom = createEvent();

// export const userJoined = createEvent();

export const roomCreatedFx = createEffect();

export const userJoinedFx = createEffect();


export const $room = createStore({
    info: null,
    roomId: null,
    ownerId: null,
    users: [],
});
