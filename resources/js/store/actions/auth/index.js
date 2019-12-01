/**
 * Internal dependencies.
 */

import { SET_USER, RESET_USER } from '@/store/constants';

export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        user,
    });
};

export const resetUser = () => dispatch => {
    dispatch({
        type: RESET_USER,
    });
};
