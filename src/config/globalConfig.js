import Axios from 'axios';

export const rootUrl = 'http://localhost:8000';

export const Http = Axios.create({
    baseURL: rootUrl
});