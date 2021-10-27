import {
    LOGIN_SUCCESS,
} from '../types/loginTypes'


import {
    IMAGE_UPLOAD_START,
    IMAGE_UPLOAD_FAILURE
} from '../types/imageUploadTypes'

//Service
import { AuthApi } from '../../services'

//Utils
import { Navigator, Helpers } from '../../utils'

//Constant
const { navigate } = Navigator
const { uploadImage } = AuthApi
const { successToast, errorToast, warningToast } = Helpers

const start = () => ({
    type: IMAGE_UPLOAD_START
})

const success = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

const failure = () => ({
    type: IMAGE_UPLOAD_FAILURE
})

export const imageUploadAction = (payload) => {
    return async (dispatch, getState) => {
        if (getState().isImageLoading) return
        dispatch(start())
        try {
            const response = await uploadImage(payload)
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
