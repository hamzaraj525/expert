import React from 'react'

//Screen
import Intro from '../screens/Intro'

export default class introScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render() {
        return <Intro />
    }
}