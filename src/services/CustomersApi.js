import { BaseURL, headers } from './ApiSetting'


const CustomersApi = {
    customerHappinessCenter: payload => {
        return fetch(`${BaseURL}customer/contact`, {
            headers,
            method: 'POST',
            body: payload
        })
    }
}

export default CustomersApi