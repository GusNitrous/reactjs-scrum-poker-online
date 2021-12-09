import {createBrowserHistory} from 'history';

export const history = createBrowserHistory({
    basename: '/'
});

export class Routes {
    static ROOT = '/';
    static AUTH = '/auth';
    static HOME = '/quickstart';
    static VOTING_ROOM = '/room/:id';
}
