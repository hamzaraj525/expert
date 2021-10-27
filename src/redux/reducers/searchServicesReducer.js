import {
    SEARCH_SERVICES_START,
    SEARCH_SERVICES_SUCCESS,
    SEARCH_SERVICES_FAILURE
} from '../types/searchServiceType'

const initialState = {
    isLoading: false,
    searchServices: []
}

const searchServicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SERVICES_START:
            return { ...state,  isLoading: true, searchServices: [] }
        case SEARCH_SERVICES_SUCCESS:
            return { ...state, isLoading: false, searchServices: action.payload.services }
        case SEARCH_SERVICES_FAILURE:
            return { ...state, isLoading: false, searchServices: [] }
        default:
            return state
    }
}

export default searchServicesReducer