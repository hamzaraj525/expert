import {
    FAQ_START,
    FAQ_SUCCESS,
    FAQ_FAILURE
} from '../types/faqTypes'

//Services
import { FaqApi } from '../../services'

//Constant
const { faq } = FaqApi

const start = () => ({
    type: FAQ_START
})

const success = payload => ({
    type: FAQ_SUCCESS,
    payload
})

const failure = () => ({
    type: FAQ_FAILURE
})

export const faqAction = () => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await faq()
            const doc = await response.json()
            const { code, data } = doc
            const { faqs } = data
            if (code === 200) {
                dispatch(success({
                    faqs
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            console.log("faqAction -> error", error)
            dispatch(failure())
        }
    }
}