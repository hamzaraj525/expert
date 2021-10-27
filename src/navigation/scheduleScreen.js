import React from 'react'
import {Text} from 'react-native'
//Screen
import Schedule from '../screens/Schedule'

export default class scheduleScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <Schedule />
    }
}