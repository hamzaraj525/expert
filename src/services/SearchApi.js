import { BaseURL, headers } from './ApiSetting'

const SerachApi = {
    searchServices : (search) => {
        return fetch(`${BaseURL}search/${search}`,{
            headers
        })
    }
}

export default SerachApi