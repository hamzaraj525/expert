import React from 'react'
import { ActivityIndicator, Text } from 'react-native'

//Styles
import styles from './styles'

//Components
import { RippleEffect } from '../index'

//Theme
import { Color } from '../../theme'

//Constants
const { primary } = Color

export default function PrimaryButton(props) {
    const {
        styling = {},
        label = 'SIGN IN',
        textStyling = {},
        onPress = () => { },
        loading = false,
        disabled = false,
        rippleColor = primary,
        rippleContainerBorderRadius = 20,
        loaderColor = primary,
        loaderSize = 'small',
        loaderStyling = {},
        children,
    } = props

    return <RippleEffect
        disabled={disabled}
        onPress={onPress}
        style={[styles.btnContainer, styling]}
        rippleContainerBorderRadius={rippleContainerBorderRadius}
        rippleColor={rippleColor} rippleOpacity={0.80} rippleDuration={500}>
        {children ? children : <Text style={[styles.txt, textStyling]}>{label}</Text>}
        {loading &&
            <ActivityIndicator color={loaderColor} size={loaderSize} style={[styles.loader, loaderStyling]} />
        }
    </RippleEffect>
}