import React from 'react'

//Screen
import OrderSuccess from '../screens/OrderSuccess'

export default class orderCartScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <OrderSuccess/>
    }
}