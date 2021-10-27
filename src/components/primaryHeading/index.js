import React from 'react'
import { Text } from 'react-native'

//Styles
import styles from './styles'

export default function PrimaryHeading(props) {

    const {
        styling = {},
        heading = "LET'S GET STARTED!",
        onPress = () => { }
    } = props

    return <Text onPress={onPress} style={[styles.heading, styling]}>{heading}</Text>
}