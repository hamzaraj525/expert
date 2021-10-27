import React from 'react'

//Screen
import OrderDetails from '../screens/OrderDetails'

export default class orderDetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        return <OrderDetails navigation={this.props.navigation}/>
    }
}