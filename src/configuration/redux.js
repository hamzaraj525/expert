import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import allReducers from '../redux/reducers'

//Utils
import { Helpers } from '../utils'

//Constants
const { validateRTL } = Helpers

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist : ['applyCouponReducer']
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const middleware = [thunk]
const store = createStore(persistedReducer, {}, compose(
    applyMiddleware(...middleware)
))

const persistor = persistStore(store, {}, () => {
    console.log('before')
    validateRTL()
})

export {
    store,
    persistor
}