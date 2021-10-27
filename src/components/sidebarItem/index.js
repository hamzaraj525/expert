import React from 'react'
import { View } from 'react-native'

//Styles
import styles from './styles'

//Components
import { RippleEffect, PrimaryHeading, ImageView } from '../../components'

//Theme
import { Color } from '../../theme'

//Utils
import { Images } from '../../utils'

//Constant
const { secondary } = Color
const { exit_main } = Images

export default function SidebarItem(props) {

    const {
        onPress = () => { },
        containerStyling = {},
        rippleColor = secondary,
        label = 'MAIN',
        icon = exit_main,
        iconComponent,
        imgStyling = {},
        labelStyling = {},
        value = '',
        valueStyling = {},
        disabled = false,
        children
    } = props

    return <RippleEffect rippleColor={rippleColor} onPress={onPress} disabled={disabled}
        style={[styles.container, containerStyling]}
    >
        {iconComponent ? iconComponent : <ImageView local={icon} styling={[styles.img, imgStyling]} />}
        <View>
            <PrimaryHeading heading={label} styling={[styles.label, labelStyling]} />
            {!!value && <PrimaryHeading heading={value} styling={[styles.value, valueStyling]} />}
        </View>
        {children}
    </RippleEffect>
}