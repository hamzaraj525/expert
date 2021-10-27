import React from 'react'

//Screen
import Approval from '../screens/Approval'

export default class approvalScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    render(){
        return <Approval />
    }
}