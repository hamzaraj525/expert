import {
    SERVICE_DETAILS_START,
    SERVICE_DETAILS_SUCCESS,
    SERVICE_DETAILS_FAILURE
} from '../types/serviceDetailsTypes'

const initialState = {
    isLoading: false,
    serviceDetails: []
}

const servicesDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICE_DETAILS_START:
            return { ...state,  isLoading: true, serviceDetails: [] }
        case SERVICE_DETAILS_SUCCESS:
            return { ...state, isLoading: false, serviceDetails: action.payload.subservices }
        case SERVICE_DETAILS_FAILURE:
            return { ...state, isLoading: false, serviceDetails: [] }
        default:
            return state
    }
}

export default servicesDetailsReducer