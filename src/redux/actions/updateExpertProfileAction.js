import {
    LOGIN_SUCCESS,
} from '../types/loginTypes'


import {
    UPDATE_EXPERT_PROFILE_START,
    UPDATE_EXPERT_PROFILE_FAILURE
} from '../types/updateExpertProfileTypes'

//Service
import { AuthApi } from '../../services'

//Utils
import { Helpers } from '../../utils'

//Constant
const { expertUpdateProfile } = AuthApi
const { successToast, errorToast, warningToast } = Helpers

const start = () => ({
    type: UPDATE_EXPERT_PROFILE_START
})

const success = payload => ({
    type: LOGIN_SUCCESS,
    payload
})

const failure = () => ({
    type: UPDATE_EXPERT_PROFILE_FAILURE
})

export const updateExpertProfileAction = (payload) => {
    return async (dispatch, getState) => {
        if (getState().loginReducer.isUpdateExpertProfileLoading) return
        dispatch(start())
        try {
            const response = await expertUpdateProfile(payload)
            const result = await response.json()
            const { message, data, code } = result
            
            if (code === 200) {
                dispatch(success({
                    user: data.user
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
    