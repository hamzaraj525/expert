import React from 'react'
import { View } from 'react-native'

//Styling
import styles from './style'

//Components
import { PrimaryHeading } from '..'

export default function WrapperHeader(props) {
    const {
        contanierStyling = {},
        textStyling = {},
        title = 'Electrical'
    } = props

    return <View style={[styles.container, contanierStyling]} >
        <PrimaryHeading heading={title} styling={[styles.text, textStyling]} />
    </View>
}