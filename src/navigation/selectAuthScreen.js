import React from 'react'

//Screen
import SelectAuth from '../screens/SelectAuth'

export default class selectAuthScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })

    render() {
        return <SelectAuth />
    }
}