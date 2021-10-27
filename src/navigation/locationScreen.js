import React from 'react'
import {Text} from 'react-native'
//Screen
import Location from '../screens/Location'

export default class locationScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <Location />
    }
}