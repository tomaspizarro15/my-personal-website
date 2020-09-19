import { } from 'redux';
import * as actionType from './actions'
const initialState = {
    token: {},
    user: {},
    test: 50,
};

const reducer = (state = initialState, action) => {
    const newState = { ...initialState };
    switch (action.type) {

        case actionType.FETCH_TOKEN:
            console.log("Token fetching")
            newState.token = action.payload.value;
            return newState;
        case actionType.FETCH_USER:
            newState.user = action.payload.value;
            return newState;
        default:
            break;
    }

    return state;
}


export default reducer; 