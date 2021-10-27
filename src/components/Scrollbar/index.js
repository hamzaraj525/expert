import React from 'react'
import { View, Text } from 'react-native'
import ScrollViewIndicator from 'react-native-scroll-indicator'

//Styles
import styles from './styles'

//Theme
import { Color } from '../../theme'

//Constants
const { primary, inputBg } = Color

export default function Scrollbar(props) {

    const {
        scrollIndicatorContainerStyle = { backgroundColor: inputBg },
        scrollIndicatorStyle = { backgroundColor: primary },
        scrollViewStyle =  styles.defaultStyling,
        children = <View />
    } = props

    return <ScrollViewIndicator
        contentContainerStyle={scrollViewStyle}
        scrollIndicatorStyle={scrollIndicatorStyle}
        scrollIndicatorContainerStyle={scrollIndicatorContainerStyle}>
        {children}
    </ScrollViewIndicator>
}