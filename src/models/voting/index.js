import {createEffect, createStore} from "effector";

const {createEvent} = require("effector");

export const votingInit = createEvent();

export const startVoting = createEvent();

export const stopVoting = createEvent();

export const sendScore = createEvent();

export const showResults = createEvent();

export const startVotingFx = createEffect();

export const votingInitFx = createEffect();

export const stopVotingFx = createEffect();

export const sendScoreFx = createEffect();

export const showResultsFx = createEffect();

export const $voting = createStore({});
