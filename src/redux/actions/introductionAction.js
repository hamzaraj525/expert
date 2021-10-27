import {
    INTRODUCTION_COMPLETED,
    INTRODUCTION_COMPLETED_SUCCESS,
    INTRODUCTION_COMPLETED_FALURE
} from '../types/introductionTypes'

const startIntroduction = () => ({
    type: INTRODUCTION_COMPLETED
})

const successIntroduction = () => ({
    type: INTRODUCTION_COMPLETED_SUCCESS
})

const failureIntroduction = () => ({
    type: INTRODUCTION_COMPLETED_FALURE
})

export const introductionAction = () => {
    return async (dispatch, getState) => {
        if (getState().showIntroFetching) return
        dispatch(startIntroduction())
        try {
            dispatch(successIntroduction())
        } catch (error) {
            dispatch(failureIntroduction())
        }
    }
}
