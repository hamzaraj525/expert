import {
    CUSTOMER_HAPPINES_CENTER_START,
    CUSTOMER_HAPPINES_CENTER_SUCCESS,
    CUSTOMER_HAPPINES_CENTER_FAILURE
} from '../types/customerHappinessCenterTypes'

const initialState = {
    isLoading: false
}

const customerHappinessCenterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CUSTOMER_HAPPINES_CENTER_START:
            return { ...state,  isLoading: true }
        case CUSTOMER_HAPPINES_CENTER_SUCCESS:
            return { ...state, isLoading: false }
        case CUSTOMER_HAPPINES_CENTER_FAILURE:
            return { ...state, isLoading: false }
        default:
            return state
    }
}

export default customerHappinessCenterReducer