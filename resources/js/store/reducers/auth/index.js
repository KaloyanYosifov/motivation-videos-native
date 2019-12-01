/**
 * Internal dependencies.
 */
import { SET_USER, RESET_USER } from '@/store/constants';
import { createReducer } from '@/utils/helpers';

const initialState = {
    user: null,
};

const actions = {
    [SET_USER]: (state, { user }) => ({ ...state, user }),
    [RESET_USER]: state => ({ ...state, user: null }),
};

export default createReducer(initialState, actions);
