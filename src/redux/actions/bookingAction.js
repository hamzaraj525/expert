import {
    BOOKING_START,
    BOOKING_SUCCESS,
    BOOKING_FAILURE
} from '../types/bookingTypes'

//Service
import { ServicesApi } from '../../services'

//Utils
import { Helpers, Navigator } from '../../utils'

//Constant
const { booking } = ServicesApi
const { successToast, errorToast, warningToast } = Helpers
const { navigate, navigateAndReset } = Navigator

const start = () => ({
    type: BOOKING_START
})

const success = payload => ({
    type: BOOKING_SUCCESS,
    payload
})

const failure = () => ({
    type: BOOKING_FAILURE
})

export const bookingAction = payload => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await booking(payload)
            const result = await response.json()
            const { message, code, data } = result

            if (code === 200) {
                dispatch(success({
                    booking: data
                }))
                successToast('Success', message)
                navigateAndReset('Home')
                navigate('OrderSuccessStack')
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
