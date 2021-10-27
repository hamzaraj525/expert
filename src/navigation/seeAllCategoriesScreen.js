import React from 'react'

//Screen
import SeeAllCatogories from '../screens/SeeAllCategories'

export default class seeAllCategoriesScreen  extends React.Component{
    static navigationOptions = ({navigation}) => ({
        header : null
    })
    render(){
        return <SeeAllCatogories />
    }
}