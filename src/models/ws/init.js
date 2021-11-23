import {createEffect, createEvent, createStore} from "effector";

export const wsError = createEvent();

export const wsException = createEvent();

export const handleExceptionFx = createEffect();

export const handleErrorFx = createEffect();

export const $wsErrors = createStore({});

