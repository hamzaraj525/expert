import {
    SEARCH_SERVICES_START,
    SEARCH_SERVICES_SUCCESS,
    SEARCH_SERVICES_FAILURE
} from '../types/searchServiceType'

//Service
import { SearchApi } from '../../services'

//Utils
import { Navigator } from '../../utils'

//Constant
const { searchServices } = SearchApi
const { navigate } = Navigator

const start = () => ({
    type: SEARCH_SERVICES_START
})

const success = (payload) => ({
    type: SEARCH_SERVICES_SUCCESS,
    payload
})

const failure = () => ({
    type: SEARCH_SERVICES_FAILURE
})

export const searchServicesAction = (search) => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await searchServices(search)
            const result = await response.json()
            const { data, code } = result
            const { service } = data
            
            if (code === 200) {
                dispatch(success({
                    services: service
                }))
                navigate('SearchResult')
            } else {
                dispatch(failure())
                navigate('SearchResult')
            }
        } catch (error) {
            dispatch(failure())
        }
    }
}
