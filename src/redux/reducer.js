import { } from 'redux';
import * as actionType from './actions'
const initialState = {
    status: undefined,
    user: {},
};

const reducer = (state = initialState, action) => {
    const newState = { ...initialState };
    switch (action.type) {
        case actionType.FETCH_STATUS:
            newState.user = action.payload.value.user;
            newState.status = action.payload.value.status;
            return newState;
        default:
            break;
    }

    return state;
}


export default reducer; 