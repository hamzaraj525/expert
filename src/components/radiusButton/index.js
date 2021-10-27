import React from 'react'
import { View } from 'react-native'

//Icons
import Entypo from 'react-native-vector-icons/Entypo'

//Styles
import styles from './styles'

//Components
import { RippleEffect } from '../../components'

//Theme
import { Color } from '../../theme'

//Constants
const { secondary } = Color

export default function RadiusButton(props) {

    const {
        onPress = {},
        styling = {},
        rippleColor = secondary,
        children,
        iconStyling = {}
    } = props

    return <RippleEffect rippleContainerBorderRadius={100} rippleColor={rippleColor} style={[styles.container, styling]} onPress={onPress}>
        {children ? children : <Entypo name="cross" style={[styles.icon, iconStyling]} />}
    </RippleEffect>
}