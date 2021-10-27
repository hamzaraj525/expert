import { combineReducers } from 'redux'
import introductionReducer from '../reducers/introductionReducer'
import setLanguageReducer from '../reducers/setLanguageReducer'
import loginReducer from '../reducers/loginReducer'
import registerReducer from '../reducers/registerReducer'
import faqReducer from '../reducers/faqReducer'
import customerHappinessCenterReducer from '../reducers/customerHappinessCenterReducer'
import servicesReducer from '../reducers/servicesReducer'
import serviceDetailsReducer from '../reducers/serviceDetailsReducer'
import subServicesDetailsReducer from '../reducers/subServiceDetailsReducer'
import serviceProvidersReducer from '../reducers/serviceProvidersReducer'
import searchServicesReducer from '../reducers/searchServicesReducer'
import applyCouponReducer from '../reducers/applyCouponReducer'
import bookingReducer from '../reducers/bookingReducer'
import bookingProviderReducer from '../reducers/bookingProviderReducer'
import bookingScheduleReducer from '../reducers/bookingScheduleReducer'
import bookingDestinationReducer from '../reducers/bookingDestinationReducer'
import cancelBookingReducer from '../reducers/cancelBookingReducer'
import myOrdersReducer from '../reducers/myOrdersReducer'

export default combineReducers({
    introductionReducer,
    setLanguageReducer,
    loginReducer,
    registerReducer,
    customerHappinessCenterReducer,
    servicesReducer,
    faqReducer,
    serviceDetailsReducer,
    subServicesDetailsReducer,
    serviceProvidersReducer,
    searchServicesReducer,
    applyCouponReducer,
    bookingReducer,
    bookingProviderReducer,
    bookingScheduleReducer,
    bookingDestinationReducer,
    cancelBookingReducer,
    myOrdersReducer
})