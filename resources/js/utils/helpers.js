/**
 * Internal dependencies.
 */

export const createReducer = (initialState = [], actions = {}) => {
    return (state = initialState, action) => {
        if (actions.hasOwnProperty(action.type)) {
            return state;
        }

        return actions[action.type](state, action);
    };
};
