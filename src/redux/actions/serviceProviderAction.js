import {
    SERVICE_PROVIDER_START,
    SERVICE_PROVIDER_SUCCESS,
    SERVICE_PROVIDER_FAILURE,
} from '../types/serviceProviderTypes'

//Helpers
import { Navigator } from '../../utils'

//Service
import { ServicesApi } from '../../services'

//Constant
const { serviceProviders } = ServicesApi
const { navigate } = Navigator

const start = () => ({
    type: SERVICE_PROVIDER_START
})

const success = (payload) => ({
    type: SERVICE_PROVIDER_SUCCESS,
    payload
})

const failure = () => ({
    type: SERVICE_PROVIDER_FAILURE
})

export const serviceProviderAction = payload => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await serviceProviders(payload)
            const result = await response.json()
            const { data, code } = result

            if (code === 200) {
                dispatch(success({
                    serviceProviders: data.provider
                }))
            } else {
                dispatch(failure())
            }
            navigate('ServiceProvider')
        } catch (error) {
            dispatch(failure())
        }
    }
}
