import React from 'react'
import { Image, View } from 'react-native'

//Styles
import styles from './styles'

//Utils
import { Images } from '../../utils'

//Constants
const { logo } = Images

export default function ImageView(props) {
    const { containerStyling = {}, styling = {}, uri = '', local = logo } = props

    return <View style={containerStyling}>
        <Image source={uri ? { uri } : local} style={[styles.img, styling]} />
    </View>
}