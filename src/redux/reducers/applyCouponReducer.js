import {
    APPLY_COUPON_START,
    APPLY_COUPON_SUCCESS,
    APPLY_COUPON_FAILURE
} from '../types/applyCouponTypes'

const initialState = {
    isLoading: false,
    coupon: {},
    isValid: false
}

const applyCouponReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLY_COUPON_START:
            return { ...state, isLoading: true, coupon: {}, isValid: false }
        case APPLY_COUPON_SUCCESS:
            return { ...state, isLoading: false, coupon: action.payload.coupon, isValid: true }
        case APPLY_COUPON_FAILURE:
            return { ...state, isLoading: false, coupon: {}, isValid: false }
        default:
            return state
    }
}

export default applyCouponReducer