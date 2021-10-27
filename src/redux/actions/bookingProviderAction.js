import { BOOKING_PROVIDER_SUCCESS } from '../types/bookingProviderTypes'

//Utils
import { Navigator } from '../../utils'

//Constants
const { navigate } = Navigator

const success = payload => ({
    type: BOOKING_PROVIDER_SUCCESS,
    payload
})

export const bookingProviderAction = payload => {
    return async (dispatch) => {
        await dispatch(success({ bookingProvider: payload }))
        navigate('Cart')
    }
}
