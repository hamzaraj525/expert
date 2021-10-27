import React from 'react'

//Screens
import CustomerHappiness from '../screens/CustomerHappiness'

export default class customerHappinessScreen  extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    render(){
        return <CustomerHappiness />
    }
} 