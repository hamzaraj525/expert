import React from 'react'
import { View, TextInput } from 'react-native'

//Styles
import styles from './styles'

//Components
import { RippleEffect, ImageView } from '../../components'

//Theme
import { Color } from '../../theme'

//Utils
import { Images } from '../../utils'

//Constants
const { secondary, toastColor } = Color
const { show } = Images

export default function Input(props) {

    const {
        containerStyling = {},
        inputStyling = {},
        primaryComponent,
        placeholderTextColor = toastColor,
        isIcon = false,
        renderComponent,
        iconHandler = () => { },
        iconContainerStyling = {},
        rippleColor = secondary,
        keyboardType = 'default',
        onChangeText = () => { },
        iconStyling = {},
        iconImage = show,
        placeholder = 'MOBILE NUMBER',
        secureTextEntry = false,
        multiline = false,
        value
    } = props

    return <View style={[styles.container, containerStyling]}>
        {primaryComponent ? primaryComponent : <TextInput secureTextEntry={secureTextEntry} keyboardType={keyboardType} placeholderTextColor={placeholderTextColor}
            onChangeText={text => onChangeText(text)}
            value={value}
            multiline={multiline}
            placeholder={placeholder} style={[styles.input, inputStyling]}
            {...props}
            />}
        {isIcon && (renderComponent ? renderComponent() : <RippleEffect
            rippleContainerBorderRadius={100}
            onPress={iconHandler}
            rippleColor={rippleColor} style={[styles.iconContainer, iconContainerStyling]}>
            <ImageView local={iconImage} styling={[styles.icon, iconStyling]} />
        </RippleEffect>)}
    </View>
}