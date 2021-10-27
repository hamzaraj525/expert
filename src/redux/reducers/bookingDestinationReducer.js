import { BOOKING_DESTINATION_SUCCESS } from '../types/bookingDestinationTypes'

const initialState = {
    destination: {}
}

const bookingDestinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_DESTINATION_SUCCESS:
            return { destination: action.payload.destination }
        default:
            return state
    }

}

export default bookingDestinationReducer