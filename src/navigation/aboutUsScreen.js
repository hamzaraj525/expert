import React from 'react'

//Screen
import AboutUs from '../screens/AboutUs'

export default class aboutUsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        return <AboutUs />
    }
}