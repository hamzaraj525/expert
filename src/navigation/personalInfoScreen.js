import React from 'react'

//Screen
import PersonalInfo from '../screens/PersonalInfo'

export default class personalInfoScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <PersonalInfo />
    }
}