import React from 'react'

//Screen
import OrderCart from '../screens/OrderCart'

export default class orderCartScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <OrderCart navigation={this.props.navigation}/>
    }
}