import {
    $authErrors,
    $authForm,
    $authUser,
    clearAuthData,
    doLogin,
    doLogout,
    loginRequestFx,
    logoutRequestFx,
    updateAuthForm,
    updateAuthUser
} from './';
import {forward} from "effector";
import {history, Routes} from "../../utils/routing";
import * as AuthAPI from '../../api/http/requests';
import {HttpStatus} from "../../api/http";
import {persist} from 'effector-storage/local'
import {closeSocket} from "../../api/ws";
import {resetWsErrors} from "../ws";


loginRequestFx.use(async ({userName, referrer}) => {
    const {data} = await AuthAPI.register(userName);
    return {data, referrer};
}).doneData.watch(({data, referrer}) => {
    resetWsErrors();
    updateAuthUser(data);
    const path = referrer ?? Routes.HOME;
    history.replace(path);
});

logoutRequestFx.use(AuthAPI.logout).finally.watch(() => {
    closeSocket();
    clearAuthData();
    history.replace(Routes.AUTH);
});

$authErrors.on(loginRequestFx.failData, (errors, httpError) => {
    if (httpError?.status === HttpStatus.BAD_REQUEST) {
        errors.inputError = {userName: httpError.message};
    } else {
        errors.commonError = httpError?.message;
    }
    return errors;
});

$authForm.reset(doLogin).on(updateAuthForm, (form, {key, value}) => ({
    ...form,
    [key]: value
}));

$authUser.reset(clearAuthData).on(updateAuthUser, (_, userData) => userData);

persist({
    store: $authUser,
    key: 'auth'
});

forward({
    from: doLogin,
    to: loginRequestFx
});

forward({
    from: doLogout,
    to: logoutRequestFx
});


