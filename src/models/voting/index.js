import {createEffect} from "effector/effector.cjs";
import {createStore} from "effector";

const {createEvent} = require("effector");

export const startVoting = createEvent();

export const stopVoting = createEvent();

export const sendScore = createEvent();

export const showResults = createEvent();

export const startVotingFx = createEffect();

export const stopVotingFx = createEffect();

export const sendScoreFx = createEffect();

export const showResultsFx = createEffect();

export const $voting = createStore({

});
