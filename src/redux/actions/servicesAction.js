import {
    SERVICES_START,
    SERVICES_SUCCESS,
    SERVICES_FAILURE
} from '../types/servicesTypes'

//Service
import { ServicesApi } from '../../services'

//Constant
const { services } = ServicesApi

const start = () => ({
    type: SERVICES_START
})

const success = (payload) => ({
    type: SERVICES_SUCCESS,
    payload
})

const failure = () => ({
    type: SERVICES_FAILURE
})

export const servicesAction = () => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await services()
            const result = await response.json()
            const { data, code } = result
            
            if (code === 200) {
                dispatch(success({
                    services: data.categories
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}
