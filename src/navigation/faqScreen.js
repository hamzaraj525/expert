import React from 'react'

//Screen
import Faq from '../screens/Faq'

export default class FaqScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header: null
    })
    render() {
        return <Faq />
    }
}