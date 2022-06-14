import {createEffect, createEvent, createStore} from "effector";

export const socketInit = createEvent();

export const wsConnection = createEvent();

export const wsDisconnect = createEvent();

export const wsError = createEvent();

export const resetWsErrors = createEvent();

export const wsException = createEvent();

export const socketInitFx = createEffect();

export const handleWsConnectionFx = createEffect();

export const handleWsExceptionFx = createEffect();

export const handleWsDisconnectFx = createEffect();

export const handleWsErrorFx = createEffect();

export const $wsState = createStore({
    ws: null,
    error: null,
    exception: null
});


