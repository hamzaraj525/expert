import {
    SERVICE_PROVIDER_START,
    SERVICE_PROVIDER_SUCCESS,
    SERVICE_PROVIDER_FAILURE
} from '../types/serviceProviderTypes'

const initialState = {
    isLoading: false,
    serviceProviders: []
}

const serviceProvidersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE_PROVIDER_START:
            return { ...state, isLoading: true, serviceProviders: [] }
        case SERVICE_PROVIDER_SUCCESS:
            return { ...state, isLoading: false, serviceProviders: action.payload.serviceProviders }
        case SERVICE_PROVIDER_FAILURE:
            return { ...state, isLoading: false, serviceProviders: [] }
        default:
            return state
    }
}

export default serviceProvidersReducer