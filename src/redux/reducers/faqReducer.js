import {
    FAQ_START,
    FAQ_SUCCESS,
    FAQ_FAILURE
} from '../types/faqTypes'

const initialState = {
    isLoading: false,
    faqs: []
}

const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        case FAQ_START:
            return { ...state, faqs: [], isLoading: true };
        case FAQ_SUCCESS:
            return { ...state, faqs: action.payload.faqs, isLoading: false }
        case FAQ_FAILURE:
            return { ...state, faqs: [], isLoading: false }
        default:
            return state
    }
}

export default faqReducer