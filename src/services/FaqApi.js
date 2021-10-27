import { BaseURL, headers } from './ApiSetting'

const FaqApi = {
    faq : () => {
        return fetch(`${BaseURL}faq`, {
            headers
        })
    }
}

export default FaqApi