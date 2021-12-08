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
import {history, Routes} from "../../utils/routing";
import * as AuthAPI from '../../api/http/requests';
import {HttpStatus} from "../../api/http";
import {persist} from 'effector-storage/local'


loginRequestFx.use(AuthAPI.register).doneData.watch(({data}) => {
    updateAuthUser(data);
    const {location} = history;
    const path = location.state?.referer ?? Routes.HOME;
    history.replace(path);
});

logoutRequestFx.use(AuthAPI.logout).finally.watch(() => {
    history.replace(Routes.AUTH);
});

$authErrors.on(loginRequestFx.failData, (errors, {status, data}) => {
    if (status === HttpStatus.BAD_REQUEST) {
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


