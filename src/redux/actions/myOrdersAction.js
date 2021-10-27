import {
    MYORDERS_START,
    MYORDERS_SUCCESS,
    MYORDERS_FAILURE
} from '../types/myOrdersTypes'

//Services
import { OrdersApi } from '../../services'

//Constant
const { getOrders } = OrdersApi

const start = () => ({
    type: MYORDERS_START
})

const success = payload => ({
    type: MYORDERS_SUCCESS,
    payload
})

const failure = () => ({
    type: MYORDERS_FAILURE
})

export const myOrdersAction = id => {
    return async (dispatch, getState) => {
        if (getState().isLoading) return
        dispatch(start())
        try {
            const response = await getOrders(id)
            const doc = await response.json()
            const { code, data } = doc

            if (code === 200) {
                dispatch(success({
                    myOrders: data.booking.reverse()
                }))
            } else {
                dispatch(failure())
            }
        } catch (error) {
            console.log("🚀 ~ file: myOrdersAction.js ~ line 43 ~ return ~ error", error)
            dispatch(failure())
        }
    }
}