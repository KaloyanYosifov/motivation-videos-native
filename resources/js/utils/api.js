/**
 * External dependencies.
 */
import axios from 'axios';

const submitRequest = (method, route, data, headers) => {
    return axios[method](process.env.APP_URL + route, data, headers)
        .catch(error => {
            return error.response;
        });
};

/**
 * Api for
 */
export default {
    get(route = '', data = {}, headers = {}) {
        return submitRequest('get', route, data, headers);
    },
    post(route = '', data = {}, headers = {}) {
        return submitRequest('post', route, data, headers);
    },
    put(route = '', data = {}, headers = {}) {
        return submitRequest('put', route, data, headers);
    },
    patch(route = '', data = {}, headers = {}) {
        return submitRequest('patch', route, data, headers);
    },
};
