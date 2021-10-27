import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../types/registerTypes';

const initialState = {
    isLoading: false,
    user: {}
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START :
            return { ...state, user: {}, isLoading: true };
        case REGISTER_SUCCESS:
            return { ...state, user: action.payload.user, isLoading: false };
        case REGISTER_FAILURE:
            return { ...state, user: {}, isLoading: false };
        default:
            return state;
    }
};

export default registerReducer;