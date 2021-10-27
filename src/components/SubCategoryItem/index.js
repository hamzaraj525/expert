import React from 'react'
import { View } from 'react-native'

//Styling
import styles from './style'

//Utils 
import { Images, Helpers } from '../../utils';

//Component
import { RippleEffect, ImageView, PrimaryHeading } from '../../components'

//Constant
const { dummy_image, forward_image } = Images
const { concatBaseUrl } = Helpers

export default function SubCategoryItem(props) {
    const {
        containerStyling = {},
        headingStyling = {},
        imageStylingContainer = {},
        imageStyling = {},
        forwardIcon = forward_image,
        onPress = () => { },
        data = {},
        icon
    } = props

    const {
        image = dummy_image,
        title = 'Air Conditioning',
        subheading = 'Various types of air confditioning services'
    } = data
    
    return <RippleEffect style={[styles.container, containerStyling]} onPress={onPress} >
        <ImageView uri={image ? concatBaseUrl(image) : dummy_image } local={dummy_image} styling={[styles.img, imageStyling]} containerStyling={[styles.imgContainer, imageStylingContainer]} />
        <View style={[styles.headingContainer, headingStyling]} >
            <PrimaryHeading heading={title} styling={styles.titleStyling} />
            <PrimaryHeading heading={subheading} styling={styles.detailStyling} />
        </View>
        {icon ? icon : <ImageView local={forwardIcon} styling={styles.forwardImage} containerStyling={styles.imgContainer} />}
    </RippleEffect>
}