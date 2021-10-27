import React from 'react'
import { View } from 'react-native'
import AnimatedModal from 'react-native-modal'

//Styles
import styles from './styles'

export default function Modal(props) {
    const { isVisible = true,
        modalStyling = {},
        children = <View />,
        handler = () => { }
    } = props

    return <AnimatedModal isVisible={isVisible} style={[styles.modalContainer, modalStyling]}
        onBackButtonPress={handler}>
        {children}
    </AnimatedModal>
}