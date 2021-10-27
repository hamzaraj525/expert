import { 
    SET_LANGUAGE,
    SET_LANGUAGE_COMPLETE,
    SET_LANGUAGE_FAILURE
 } from '../types/setLanguageTypes'

 const setLanguage = () => ({
     type: SET_LANGUAGE
 })

 const successSetLanguage = (payload) => ({
     type: SET_LANGUAGE_COMPLETE,
     payload
 })

 const failureSetLanguage = () => ({
    type: SET_LANGUAGE_FAILURE,
})

export const setLanguageAction = (selectedLanguage) => {
    return async (dispatch, getState) => {
        if(getState().isLanguageSet) return 
        dispatch(setLanguage())
        try {
            dispatch(successSetLanguage({
                selectedLanguage
            }))
        } catch (error) {
            dispatch(failureSetLanguage())
        }
    }
}