import { BOOKING_SCHEDULE_SUCCESS } from '../types/bookingScheduleType'

//Utils
import { Navigator } from '../../utils'

//Constants
const { navigate } = Navigator

const success = payload => ({
    type: BOOKING_SCHEDULE_SUCCESS,
    payload
})

export const bookingScheduleAction = payload=> {
    return async (dispatch) => {
        dispatch(success({ bookingSchedule: payload}))
    }
}
