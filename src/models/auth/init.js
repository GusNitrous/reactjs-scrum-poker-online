import {$authErrors, $authForm, $authUser, doLogin, doLogout, loginRequestFx, updateAuthForm, updateAuthUser} from './';
import {forward} from "effector";
import {BAD_REQUEST} from "../../constants/http-status";
import {Routes, history} from "../../utils/routing";
import {setAuthData} from "../../utils/auth";
import * as AuthAPI from '../../rest-api/auth';

loginRequestFx.use(AuthAPI.register).doneData.watch(({data}) => {
    try {
        setAuthData(data);
        const {location} = history;
        const path = location.state?.referer ?? Routes.HOME;
        history.replace(path);
        updateAuthUser(data);
    } catch (err) {
        console.log('--- handleSuccessLoginFx_err ---', err);
    }
});

$authErrors.on(loginRequestFx.failData, (errors, {status, data}) => {
    if (status === BAD_REQUEST) {
        errors.inputError = {userName: data.message};
    } else {
        errors.commonError = data.message;
    }
    return errors;
});

$authForm.on(updateAuthForm, (form, {key, value}) => ({
    ...form,
    [key]: value
}));

$authUser.reset(doLogout).on(updateAuthUser, (_, userData) => userData);

forward({
   from: doLogin,
   to: loginRequestFx
});


