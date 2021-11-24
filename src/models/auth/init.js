import {
    $authErrors,
    $authForm,
    $authUser,
    doLogin,
    doLogout,
    loginRequestFx,
    logoutRequestFx,
    updateAuthForm,
    updateAuthUser
} from './';
import {forward} from "effector";
import {BAD_REQUEST} from "../../api/rest/http-status";
import {Routes, history} from "../../utils/routing";
import {clearAuthData, setAuthData} from "../../utils/auth";
import * as AuthAPI from '../../api/rest-api/auth';

loginRequestFx.use(AuthAPI.register).doneData.watch(({data}) => {
    try {
        setAuthData(data);
        const {location} = history;
        const path = location.state?.referer ?? Routes.HOME;
        history.replace(path);
        updateAuthUser(data);
    } catch (err) {
        console.log('--- LOGIN_REQUEST_FX_ERROR ---', err);
    }
});

logoutRequestFx.use(AuthAPI.logout).finally.watch(() => {
    clearAuthData();
    history.replace(Routes.AUTH);
});

$authErrors.on(loginRequestFx.failData, (errors, {status, data}) => {
    if (status === BAD_REQUEST) {
        errors.inputError = {userName: data.message};
    } else {
        errors.commonError = data.message;
    }
    return errors;
});

$authForm.reset(doLogin).on(updateAuthForm, (form, {key, value}) => ({
    ...form,
    [key]: value
}));

$authUser.reset(doLogout).on(updateAuthUser, (_, userData) => userData);

forward({
   from: doLogin,
   to: loginRequestFx
});

forward({
    from: doLogout,
    to: logoutRequestFx
});


