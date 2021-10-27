import React from 'react'
import {Text} from 'react-native'

//Screen
import SelectServiceProvider from '../screens/SelectServiceProvider'

export default class selectServiceProviderScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <SelectServiceProvider />
    }
}