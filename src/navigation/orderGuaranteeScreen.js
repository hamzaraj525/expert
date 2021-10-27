import React from 'react'
import {Text} from 'react-native'
//Screen
import OrderGuarantee from '../screens/OrderGuarantee'

export default class orderGuaranteeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <OrderGuarantee navigation={this.props.navigation} />
    }
}