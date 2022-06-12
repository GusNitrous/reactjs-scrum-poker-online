import {createEvent, createStore} from "effector";

export const networkError = createEvent();

export const resetAppErrors = createEvent();

export const $appState = createStore({
    networkError: null,
});
