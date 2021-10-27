import {
    APPLY_COUPON_START,
    APPLY_COUPON_SUCCESS,
    APPLY_COUPON_FAILURE
} from '../types/applyCouponTypes'

//Service
import { ServicesApi } from '../../services'

//Utils
import { Helpers } from '../../utils'

//Constant
const { applyCoupon } = ServicesApi
const { successToast, errorToast, warningToast } = Helpers

const start = () => ({
    type: APPLY_COUPON_START
})

const success = payload => ({
    type: APPLY_COUPON_SUCCESS,
    payload
})

const failure = () => ({
    type: APPLY_COUPON_FAILURE
})

export const applyCouponAction = payload => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await applyCoupon(payload)
            const result = await response.json()
            const { message, code, data } = result

            if (code === 200) {
                dispatch(success({
                    coupon: data
                }))
                successToast('Success', message)
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
