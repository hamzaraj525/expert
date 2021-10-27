import React from 'react'
import { View, ActivityIndicator } from 'react-native'

//Styles
import styles from './styles'

//Components
import { ImageView } from '../index'

//Themes
import { Color } from '../../theme'

//Constant
const { primary } = Color

export default function Spinner(props) {

    const { color = primary, size = 'large', isVisible = true, containerStyling = {}, imageShown = true } = props

    if (isVisible) {
        return <View style={[styles.container, containerStyling]}>
            {imageShown && <ImageView containerStyling={styles.imgContainer} />}
            <ActivityIndicator color={color} size={size} />
        </View>
    } else {
        return null
    }
}