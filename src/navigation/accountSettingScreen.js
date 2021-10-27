import React from 'react'

//Screen
import AccountSetting from '../screens/AccountSetting'

export default class accountSettingScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <AccountSetting />
    }
}