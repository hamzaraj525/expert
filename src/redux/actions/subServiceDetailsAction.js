import {
    SUB_SERVICES_DETAILS_START,
    SUB_SERVICES_DETAILS_SUCCESS,
    SUB_SERVICES_DETAILS_FAILURE
} from '../types/subServicesDetailsTypes'

//Service
import { ServicesApi } from '../../services'

//Constant
const { subServicesDetails } = ServicesApi

const start = () => ({
    type: SUB_SERVICES_DETAILS_START
})

const success = (payload) => ({
    type: SUB_SERVICES_DETAILS_SUCCESS,
    payload
})

const failure = () => ({
    type: SUB_SERVICES_DETAILS_FAILURE
})

export const subServiceDetailsAction = (id) => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await subServicesDetails(id)
            const result = await response.json()
            const { data, code } = result
            
            if (code === 200) {
                dispatch(success({
                    subServicesDetails: data.subservice[0]
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}