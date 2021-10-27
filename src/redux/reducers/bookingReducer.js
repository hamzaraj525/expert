import {
    BOOKING_START,
    BOOKING_SUCCESS,
    BOOKING_FAILURE
} from '../types/bookingTypes'

const initialState = {
    isLoading: false,
    booking: {}
}

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_START:
            return { ...state, isLoading: true, booking: {} }
        case BOOKING_SUCCESS:
            return { ...state, isLoading: false, booking: action.payload.booking }
        case BOOKING_FAILURE:
            return { ...state, isLoading: false, booking: {} }
        default:
            return state
    }
}

export default bookingReducer