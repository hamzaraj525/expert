import React from 'react'

//Screen
import ViewProfile from '../screens/ViewProfile'

export default class viewProfileScreen extends React.Component{
    static navigationOptions = ({ navigation}) => ({
        header: null
    })
    render(){
        return <ViewProfile />
    }
}