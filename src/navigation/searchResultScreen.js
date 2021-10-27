import React from 'react'

//Screen
import SearchResult from '../screens/SearchResult'

export default class searchResultScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <SearchResult/>
    }
}