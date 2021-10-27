import { 
    SET_LANGUAGE,
    SET_LANGUAGE_COMPLETE,
    SET_LANGUAGE_FAILURE
 } from '../types/setLanguageTypes'

 const initaialState = {
     selectedLanguage: '',
     isLanguageSet: true
 }

 export default setLanguageReducer = (state = initaialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE :
            return {
                ...state, selectedLanguage: '', isLanguageSet: true
            }
        case SET_LANGUAGE_COMPLETE :
            return {
                ...state, selectedLanguage: action.payload.selectedLanguage, isLanguageSet: false
            }
        case SET_LANGUAGE_FAILURE :
            return {
                ...state, selectedLanguage: '', isLanguageSet: false
            }
        default:
            return state
            
    }
 }