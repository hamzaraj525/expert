import React from 'react'
import { Text } from 'react-native'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Styles
import styles from './styles'

//Components
import { RippleEffect } from '../../components'

//Theme
import { Color } from '../../theme'

//Constants
const { secondary } = Color

export default function SquareButton(props) {

    const {
        styling = {},
        rippleColor = secondary,
        label = 'NEXT',
        isIcon = true,
        textStyling = {},
        icon,
        iconStyling = {},
        onPress = () => {}
    } = props

    return <RippleEffect onPress={onPress} rippleColor={rippleColor} style={[styles.container, styling]}>
        <Text style={[styles.text, textStyling]}>{label}</Text>
        {isIcon && (icon ? icon : <AntDesign name="arrowright" style={[styles.icon, iconStyling]} />)}
    </RippleEffect>
}