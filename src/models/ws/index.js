import {createEffect, createEvent, createStore} from "effector";

export const wsConnection = createEvent();

export const wsError = createEvent();

export const wsException = createEvent();

export const handleWsConnectionFx = createEffect();

export const handleWsExceptionFx = createEffect();

export const handleWsErrorFx = createEffect();

export const $wsState = createStore({
    isConnected: false,
    error: null,
    exception: null
});


