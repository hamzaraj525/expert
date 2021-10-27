import {
    LOGIN_SUCCESS,
} from '../types/loginTypes'


import {
    UPDATE_PROFILE_START,
    UPDATE_PROFILE_FAILURE
} from '../types/updateProfileTypes'

//Service
import { AuthApi } from '../../services'

//Utils
import { Helpers } from '../../utils'

//Constant
const { updateProfile } = AuthApi
const { successToast, errorToast, warningToast } = Helpers

const start = () => ({
    type: UPDATE_PROFILE_START
})

const success = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

const failure = () => ({
    type: UPDATE_PROFILE_FAILURE
})

export const updateProfileAction = (payload) => {
    return async (dispatch, getState) => {
        if (getState().isUpdateProfileLoading) return
        dispatch(start())
        try {
            const response = await updateProfile(payload)
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
