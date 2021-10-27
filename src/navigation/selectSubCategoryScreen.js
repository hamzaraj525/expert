import React from 'react'

//Screen
import SelectSubCategory from '../screens/SelectSubCategory'

export default class selectSubCategoryScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        header : null
    })
    
    render(){
        return <SelectSubCategory navigation={this.props.navigation}/>
    }
}