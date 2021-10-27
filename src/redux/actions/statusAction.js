import {
    STATUS_START,
    STATUS_SUCCESS,
    STATUS_FAILURE
} from '../types/statusTypes'

//Service
import { AuthApi } from '../../services'

//Constant
const { expertActivity } = AuthApi

const start = () => ({
    type: STATUS_START
})

const success = (payload) => ({
    type: STATUS_SUCCESS,
    payload
})

const failure = () => ({
    type: STATUS_FAILURE
})

export const statusAction = (payload) => {
    return async (dispatch, getState) => {
        if (getState().isDisable) return
        dispatch(start())
        try {
            const response = await expertActivity(payload)
            const result = await response.json()
            const { data, code } = result
            
            if (code === 200) {
                dispatch(success({
                    status: data.user.availability
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}
