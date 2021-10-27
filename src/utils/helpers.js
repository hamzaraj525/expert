//Socail
import Share from 'react-native-share'

//Store
import { store } from '../configuration'

//Themes
import { Languages, Constants } from '../theme'

//Toast
import Toast from 'react-native-toast-message'

import DeviceInfo from 'react-native-device-info';

//Constant
const { emailRegex, phoneRegex, cnicRegex } = Constants
const BaseURL = 'https://expertnearu.com/'

export const hasNotch = DeviceInfo.hasNotch();


let ID
let token

function checkNull(val) {
    return isNull(val) ? '' : val
}

function pad(num) {
    return ("0" + num).slice(-2);
}

function hhmmss(secs = 0) {
    var minutes = Math.floor(secs / 60);
    secs = secs % 60;
    var hours = Math.floor(minutes / 60)
    minutes = minutes % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

function setUserId(_id) {
    ID = _id
}

function getUserId() {
    return ID
}

function setToken(_token) {
    token = _token
}

function getToken() {
    return token
}

function translateLang(lang, key) {
    if (!lang) {
        return Languages.en[key]
    } else {
        return Languages[lang][key]
    }
}

function validateRTL() {
    const data = store.getState()
    const language = data['setLanguageReducer']['selectedLanguage']
    return language === 'ur' ? true : false
}

function successToast(title, desc) {
    return (
        Toast.show({
            type: 'success',
            text1: title,
            text2: desc
        })
    )
}

function warningToast(title, desc) {
    return (
        Toast.show({
            type: 'info',
            text1: title,
            text2: desc
        })
    )
}

function errorToast(title, desc) {
    return (
        Toast.show({
            type: 'error',
            text1: title,
            text2: desc
        })
    )
}

function setFormdata(payload) {
    var formData = new FormData

    for (var key in payload) {
        formData.append(key, payload[key])
    }

    return formData
}

export const validateEmail = email => {
    return emailRegex.test(email)
}

export const validatePhone = phone => {
    return phoneRegex.test(phone)
}

export const validateCnic = cnic => {
    return cnicRegex.test(cnic)
}

export const concatBaseUrl = url => {
    if (!url) return null
    return `${BaseURL}${url}`
}

export const socialLinking = (option) => {
    return Share.shareSingle(option)
}

export default {
    checkNull,
    hhmmss,
    setUserId,
    getUserId,
    setToken,
    getToken,
    translateLang,
    validateRTL,
    successToast,
    warningToast,
    errorToast,
    setFormdata,
    validateEmail,
    validatePhone,
    validateCnic,
    concatBaseUrl,
    socialLinking
}
