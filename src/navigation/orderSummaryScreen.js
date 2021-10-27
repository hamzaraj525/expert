import React from 'react'

//Screen
import OrderSummary from '../screens/OrderSummary'

export default class orderSummaryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        return <OrderSummary navigation={this.props.navigation} />
    }
}