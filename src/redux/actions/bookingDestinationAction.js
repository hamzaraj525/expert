import { BOOKING_DESTINATION_SUCCESS } from '../types/bookingDestinationTypes'

//Utils
import { Navigator } from '../../utils'

//Constants
const { navigate } = Navigator

const success = payload => ({
    type: BOOKING_DESTINATION_SUCCESS,
    payload
})


export const bookingDestinationAction = payload => {
    return async (dispatch) => {
        await dispatch(success({ destination: payload }))
        navigate('Schedule')
    }
}