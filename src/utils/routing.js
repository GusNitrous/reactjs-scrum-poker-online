import {createBrowserHistory} from 'history';

export const history = createBrowserHistory({
    basename: '/'
});

export const Routes = {
    ROOT: '/',
    AUTH: '/auth',
    HOME: '/quickstart',
    VOTING_ROOM: '/room/:id',
};
