import axios from 'axios';
import {makeHttpRequest} from "./helpers";


export const request = makeHttpRequest(axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
}));

export const get = ({url, ...opt}) => request({method: 'GET', url, ...opt});

export const post = ({url, data, ...opt}) => request({method: 'POST', url, data, ...opt});












