import React from 'react'
import { View } from 'react-native'

//Styling
import styles from './style'

//Component
import { ImageView, PrimaryHeading, RippleEffect } from '..'

//Themes
import { Color } from '../../theme'

//Utils
import { Images, Helpers, Navigator } from '../../utils'

//Constant
const { categoryPlaceholder } = Images
const { secondary } = Color
const { concatBaseUrl } = Helpers
const { navigate } = Navigator

export default function CategortCardItem(props) {
    const {
        containerStyling = {},
        textStyling = {},
        data = {},
        onPress = () => { }
    } = props

    const { title, image } = data.item
   
    const switchScreen = ({item}) => {
        navigate('SubCategory', {data : item})
    }

    return <RippleEffect rippleColor={secondary} rippleContainerBorderRadius={20} style={[styles.container, containerStyling]} onPress={() => switchScreen(data)}>
        <ImageView local={categoryPlaceholder} uri={image ? concatBaseUrl(image) : ''} containerStyling={styles.imageContainer} styling={styles.img} />
        <View style={styles.textContainer}>
            <PrimaryHeading heading={title} styling={[styles.text, textStyling]} />
        </View>
    </RippleEffect>
}