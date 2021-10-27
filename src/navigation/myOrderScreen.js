import React from 'react'

//Screen
import MyOrder from '../screens/Order'

export default class myOrderScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        header : null 
    })
    render(){
        return <MyOrder />
    }
}