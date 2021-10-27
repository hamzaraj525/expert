import React from 'react'

//Screen
import SelectLanguage from '../screens/SelectLanguage'

export default class languageScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <SelectLanguage />
    }
}