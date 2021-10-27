import {
    CANCEL_BOOKING_START,
    CANCEL_BOOKING_SUCCESS,
    CANCEL_BOOKING_FAILURE
} from '../types/cancelledBookingTypes'

//Service
import { OrdersApi } from '../../services'

//Utils
import { Helpers, Navigator } from '../../utils'

//Constant
const { cancelOrder } = OrdersApi
const { successToast, errorToast, warningToast } = Helpers
const { navigate } = Navigator

const start = () => ({
    type: CANCEL_BOOKING_START
})

const success = payload => ({
    type: CANCEL_BOOKING_SUCCESS,
    payload
})

const failure = () => ({
    type: CANCEL_BOOKING_FAILURE
})

export const cancelBookingAction = id => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await cancelOrder(id)
            const result = await response.json()
            const { message, code, data } = result

            if (code === 200) {
                dispatch(success({
                    cancelledBooking: data
                }))
                successToast('Success', message)
                navigate('Home')
            } else {
                warningToast('Warning', message)
                dispatch(failure())
            }
        } catch (error) {
            errorToast('Error', error.toString())
            dispatch(failure())
        }
    }
}
