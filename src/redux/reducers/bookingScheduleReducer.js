import { BOOKING_SCHEDULE_SUCCESS } from '../types/bookingScheduleType'

const initialState = {
    bookingSchedule : {}
}

const bookingScheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING_SCHEDULE_SUCCESS:
            return { bookingSchedule: action.payload.bookingSchedule }
        default:
            return state
    }
}

export default bookingScheduleReducer