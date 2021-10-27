import React from 'react'

//Screen
import Inbox from '../screens/Inbox'

export default class inboxScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        return <Inbox />
    }
}