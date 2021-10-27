import React from 'react'

//Screen
import Loading from '../screens/Loading'

export default class loadingScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <Loading />
    }
}