import {
    SERVICES_START,
    SERVICES_SUCCESS,
    SERVICES_FAILURE
} from '../types/servicesTypes'

const initialState = {
    isLoading: false,
    services: []
}

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVICES_START:
            return { ...state,  isLoading: true, services: [] }
        case SERVICES_SUCCESS:
            return { ...state, isLoading: false, services: action.payload.services }
        case SERVICES_FAILURE:
            return { ...state, isLoading: false, services: [] }
        default:
            return state
    }
}

export default servicesReducer