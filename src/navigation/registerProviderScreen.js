import React from 'react'

//Screen
import RegisterProvider from '../screens/RegisterProvider'

export default class RegisterProviderScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        return <RegisterProvider />
    }
}