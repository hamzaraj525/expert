import React from 'react'
import { View } from 'react-native'

//Styles
import styles from './styles'

//Components
import { ImageView } from '../../components'

//Utils
import { Images } from '../../utils'

//Constants
const { mainBg } = Images

export default function BgWrapper(props) {

    const {
        background = mainBg,
        styling = {},
        overlay = true,
        uri = '',
        children = <View />,
        overlayStyling = {}
    } = props

    return <View>
        <ImageView uri={uri} local={background} styling={[styles.bgStyling, styling]} />
        {overlay && <View style={[styles.overlayContainer, overlayStyling]}>
            {children}
        </View>}
    </View>
}