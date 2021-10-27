import React from 'react'

//Screen
import SignUp from '../screens/SignUp'

export default class signUpScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <SignUp />
    }
}