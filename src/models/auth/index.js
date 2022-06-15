import {createEffect, createEvent, createStore} from 'effector';

export const updateAuthForm = createEvent();

export const updateAuthUser = createEvent();

export const clearAuthData = createEvent();

export const doLogin = createEvent();

export const doLogout = createEvent();

export const loginRequestFx = createEffect();

export const logoutRequestFx = createEffect();

export const $authErrors = createStore({
    inputError: {}
});

export const $authForm = createStore({
    userName: '',
});

export const $authUser = createStore({
    jwtToken: '',
    userId: '',
    role: '',
    userName: '',
});
