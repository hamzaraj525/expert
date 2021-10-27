import { BaseURL, headers } from './ApiSetting'


const AuthApi = {
    login: payload => {
        return fetch(`${BaseURL}login`, {
            headers,
            method: 'POST',
            body: payload
        })
    },
    register: payload => {
        return fetch(`${BaseURL}customer/register`, {
            headers,
            method: 'POST',
            body: payload
        })
    },
    uploadImage: payload => {
        return fetch(`${BaseURL}customer/image`, {
            headers,
            method: 'POST',
            body: payload,
        })
    },
    updateProfile: payload => {
        return fetch(`${BaseURL}customer/profile`, {
            headers,
            method: 'POST',
            body: payload
        })
    },
    expertActivity: payload => {
        return fetch(`${BaseURL}expert/activity`, {
            headers,
            method: 'POST',
            body: payload
        })
    },
    expertUpdateProfile: payload => {
        return fetch(`${BaseURL}expert/profile`, {
            headers,
            method: 'POST',
            body: payload
        })
    }
}

export default AuthApi