import {createEffect, createStore} from "effector";

const {createEvent} = require("effector");

export const votingInit = createEvent();

export const startVoting = createEvent();

export const votingStarted = createEvent();

export const stopVoting = createEvent();

export const sendScore = createEvent();

export const updateScore = createEvent();

export const showResults = createEvent();

export const updateResults = createEvent();

export const userLeave = createEvent();

export const startVotingFx = createEffect();

export const votingInitFx = createEffect();

export const stopVotingFx = createEffect();

export const sendScoreFx = createEffect();

export const showResultsFx = createEffect();

export const $voting = createStore({
    status: 0,
    results: null
});
