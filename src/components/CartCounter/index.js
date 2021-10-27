import React from 'react'
import { View, Text } from 'react-native'

//Styling
import styles from './style';

//Icon
import AntDesign from 'react-native-vector-icons/AntDesign'

//Component
import {  RadiusButton } from '../../components'

//Theme
import { Color } from '../../theme';

//Constant
const { white, primary } = Color

export default function CartCounter(props) {
    const {
        plusHandler = () => { },
        minusHandler = () => { },
        value = 0
    } = props

    return <View style={[styles.container]} >
        <RadiusButton styling={styles.minusIcon} rippleColor={primary} onPress={minusHandler} >
            <AntDesign name='minus' size={20} color={white} />
        </RadiusButton>
        <View style={styles.textContainer} >
            <Text style={styles.text} >{value}</Text>
        </View>
        <RadiusButton styling={styles.plusIcon} onPress={plusHandler} >
            <AntDesign name='plus' size={20} color={white} />
        </RadiusButton>
    </View>
}