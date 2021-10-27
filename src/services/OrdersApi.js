import { BaseURL, headers } from './ApiSetting'

const OrdersApi = {
    cancelOrder: id => {
        return fetch(`${BaseURL}order/reject/${id}`, {
            headers
        })
    },
    getOrders: id => {
        return fetch(`${BaseURL}order/list/${id}`, {
            headers
        })
    }
}

export default OrdersApi