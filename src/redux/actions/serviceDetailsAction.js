import {
    SERVICE_DETAILS_START,
    SERVICE_DETAILS_SUCCESS,
    SERVICE_DETAILS_FAILURE
} from '../types/serviceDetailsTypes'

//Service
import { ServicesApi } from '../../services'

//Constant
const { serviceDetails } = ServicesApi

const start = () => ({
    type: SERVICE_DETAILS_START
})

const success = (payload) => ({
    type: SERVICE_DETAILS_SUCCESS,
    payload
})

const failure = () => ({
    type: SERVICE_DETAILS_FAILURE
})

export const serviceDetailsAction = (id) => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await serviceDetails(id)
            const result = await response.json()
            const { data: { subservice }, code } = result
            
            if (code === 200) {
                dispatch(success({
                    subservices: subservice
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}
