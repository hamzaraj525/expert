import {
    INTRODUCTION_COMPLETED,
    INTRODUCTION_COMPLETED_SUCCESS,
    INTRODUCTION_COMPLETED_FALURE
} from '../types/introductionTypes'

const initialState = {
    showIntro: false,
    showIntroFetching: true
}

const introductionReducer = (state = initialState, action) => {
    switch (action.type) {
        case INTRODUCTION_COMPLETED:
            return { ...state,  showIntroFetching: true }
        case INTRODUCTION_COMPLETED_SUCCESS:
            return { ...state, showIntro: true, showIntroFetching: false }
        case INTRODUCTION_COMPLETED_FALURE:
            return { ...state, showIntro: false, showIntroFetching: false }
        default:
            return state
    }
}

export default introductionReducer