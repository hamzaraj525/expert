import React from 'react'

//Screen
import Chat from '../screens/Chat'

export default class chatScreen extends React.Component{
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    render(){
        return <Chat />
    }
}