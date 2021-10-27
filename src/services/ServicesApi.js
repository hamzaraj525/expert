import { BaseURL, headers } from './ApiSetting'


const ServicesApi = {
    services: () => {
        return fetch(`${BaseURL}service/list`, {
            headers
        })
    },
    serviceDetails: id => {
        return fetch(`${BaseURL}service/detail/${id}`, {
            headers
        })
    },
    subServicesDetails: id => {
        return fetch(`${BaseURL}subservice/detail/${id}`, {
            headers
        })
    },
    serviceProviders: payload => {
        return fetch(`${BaseURL}service/provider`, {
            headers,
            method: 'POST',
            body: payload
        })
    },
    applyCoupon: payload => {
        return fetch(`${BaseURL}coupon/apply`, {
            headers,
            method: 'POST',
            body: payload
        })
    },
    booking: payload => {
        return fetch(`${BaseURL}booking/submit`, {
            headers,
            method: 'POST',
            body: payload
        })
    }
}

export default ServicesApi