import {createEffect, createEvent, createStore} from 'effector';

export const updateAuthForm = createEvent();

export const updateAuthUser = createEvent();

export const clearAuthData = createEvent();

export const doLogin = createEvent();

export const doLogout = createEffect();

export const loginRequestFx = createEffect();

export const logoutRequestFx = createEffect();

export const $authErrors = createStore({
    commonError: '',
    inputError: {}
});

export const $authForm = createStore({
    userName: '',
});

export const $authUser = createStore({});
