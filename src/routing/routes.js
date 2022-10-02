import {lazy} from "react";
import {RoutePath} from "./route-path";

const AuthPage = lazy(() => import('../pages/Auth/AuthPage'));
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const VotingRoomPage = lazy(() => import('../pages/VotingRoom/VotingRoomPage'));
const NotFoundErrorPage = lazy(() => import('../pages/Errors/NotFound'));

export const AppRoutes = [
    {
        path: RoutePath.AUTH,
        component: AuthPage,
        exact: true,
    },
    {
        path: RoutePath.HOME,
        component: HomePage,
        exact: true,
    },
    {
        path: RoutePath.VOTING_ROOM,
        component: VotingRoomPage,
        exact: true,
    },
    {
        path: RoutePath.ROOT,
        component: NotFoundErrorPage,
        exact: false,
    },
]
