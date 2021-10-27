import {
    MYORDERS_START,
    MYORDERS_SUCCESS,
    MYORDERS_FAILURE
} from '../types/myOrdersTypes'

const initialState = {
    isLoading: true,
    myOrders: []
}

const myOrdersReducer = (state = initialState, action) => {
    switch (action.type) {
        case MYORDERS_START:
            return { ...state, myOrders: [], isLoading: true };
        case MYORDERS_SUCCESS:
            return { ...state, myOrders: action.payload.myOrders, isLoading: false }
        case MYORDERS_FAILURE:
            return { ...state, myOrders: [], isLoading: false }
        default:
            return state
    }
}

export default myOrdersReducer