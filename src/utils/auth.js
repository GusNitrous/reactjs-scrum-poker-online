import {clear, getItem, setItem} from './storage';

export function setAuthData(data) {
    setItem('auth', data);
}

export function getAuthData() {
    return getItem('auth');
}

export function clearAuthData() {
    clear();
}

export function isLoggedIn() {
    return getAuthData()?.userName;
}


