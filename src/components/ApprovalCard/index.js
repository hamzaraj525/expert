import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Styling
import styles from './style'

//Icon
import Ionicons from 'react-native-vector-icons/Ionicons';

//Component
import { ImageView, PrimaryHeading, RippleEffect } from '../../components'

//Utils
import { Images } from '../../utils'

//Constant
const { calendar_icon } = Images

export default function ApprovalCard(props) {
    const {
        containerStyling = {},
        data = {},
        handler = () => {}
    } = props
    const {
        date = 14,
        month = 'April',
        year = 2020
    } = data

    return <RippleEffect style={[styles.container, containerStyling]} onPress={handler} >
        <View style={styles.imageWrapper}>
            <ImageView local={calendar_icon} containerStyling={styles.imageContainer} styling={styles.image} />
            <View style={styles.textContainer}>
                <PrimaryHeading heading={date} styling={styles.text} />
                <PrimaryHeading heading={month} styling={styles.month} />
                <PrimaryHeading heading={year} styling={styles.year} />
            </View>
        </View>
        <View>
            <Ionicons name='chevron-forward' style={styles.iconStyling} />
        </View>
    </RippleEffect>
}
