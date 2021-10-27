import { BOOKING_PROVIDER_SUCCESS } from '../types/bookingProviderTypes'

const initialState = {
    bookingProvider : {}
}

const bookingProviderReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_PROVIDER_SUCCESS:
            return { bookingProvider: action.payload.bookingProvider }
        default:
            return state
    }
}

export default bookingProviderReducer