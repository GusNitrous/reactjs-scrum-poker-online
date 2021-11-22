import {createEffect, createEvent, createStore} from 'effector';

export const updateAuthForm = createEvent();

export const updateAuthUser = createEvent();

export const doLogin = createEvent();

export const doLogout = createEffect();

export const loginRequestFx = createEffect();

export const handleSuccessLoginFx = createEffect();

export const logoutRequestFx = createEffect();

export const handleSuccessLogoutFx = createEffect();

export const $authErrors = createStore({
    commonError: '',
    inputError: {}
});

export const $authForm = createStore({
    userName: '',
});

// FIXME сделать грамотную привязку к local storage, чтобы после перезагрузки страницы всё восстанавливалось
export const $authUser = createStore({});
