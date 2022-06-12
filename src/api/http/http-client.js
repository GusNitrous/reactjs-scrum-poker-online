import axios from 'axios';
import {makeHttpRequest} from "./helpers";


export const request = makeHttpRequest(axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
}));

export const get = ({url, config = {}}) => request({method: 'GET', url, ...config});

export const post = ({url, data, config = {}}) => request({method: 'POST', url, data, ...config});












