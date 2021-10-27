import {
    CUSTOMER_HAPPINES_CENTER_START,
    CUSTOMER_HAPPINES_CENTER_SUCCESS,
    CUSTOMER_HAPPINES_CENTER_FAILURE
} from '../types/customerHappinessCenterTypes'

//Service
import { CustomerApi } from '../../services'

//Utils
import { Helpers } from '../../utils'

//Constant
const { customerHappinessCenter } = CustomerApi
const { successToast, errorToast, warningToast } = Helpers

const start = () => ({
    type: CUSTOMER_HAPPINES_CENTER_START
})

const success = (payload) => ({
    type: CUSTOMER_HAPPINES_CENTER_SUCCESS,
    payload
})

const failure = () => ({
    type: CUSTOMER_HAPPINES_CENTER_FAILURE
})

export const customerHappinessCenterAction = (payload) => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await customerHappinessCenter(payload)
            const result = await response.json()
            const { message, code } = result
            
            if (code === 200) {
                dispatch(success())
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
