import {
    SUB_SERVICES_DETAILS_START,
    SUB_SERVICES_DETAILS_SUCCESS,
    SUB_SERVICES_DETAILS_FAILURE
} from '../types/subServicesDetailsTypes'

const initialState = {
    isLoading: true,
    subServicesDetails: {}
}

const subServicesDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUB_SERVICES_DETAILS_START:
            return { ...state,  isLoading: true, subServicesDetails: {} }
        case SUB_SERVICES_DETAILS_SUCCESS:
            return { ...state, isLoading: false, subServicesDetails: action.payload.subServicesDetails }
        case SUB_SERVICES_DETAILS_FAILURE:
            return { ...state, isLoading: false, subServicesDetails: {} }
        default:
            return state
    }
}

export default subServicesDetailsReducer