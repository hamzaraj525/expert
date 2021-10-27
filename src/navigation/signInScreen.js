import React from 'react'

//Screen
import SignIn from '../screens/SignIn'

export default class signInScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <SignIn />
    }
}