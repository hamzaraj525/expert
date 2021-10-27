import {
    CANCEL_BOOKING_START,
    CANCEL_BOOKING_SUCCESS,
    CANCEL_BOOKING_FAILURE
} from '../types/cancelledBookingTypes'

const initialState = {
    isLoading: false,
    cancelledBooking: {}
}

const cancelBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CANCEL_BOOKING_START:
            return { ...state, isLoading: true, cancelledBooking: {} }
        case CANCEL_BOOKING_SUCCESS:
            return { ...state, isLoading: false, cancelledBooking: action.payload.cancelledBooking }
        case CANCEL_BOOKING_FAILURE:
            return { ...state, isLoading: false, cancelledBooking: {} }
        default:
            return state
    }
}

export default cancelBookingReducer