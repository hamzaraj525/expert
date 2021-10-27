import React from 'react'
import { View } from 'react-native'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

//Styles
import styles from './styles'

//Components
import { RippleEffect, PrimaryHeading } from '../../components'

export default function Checkbox(props) {

    const {
        styling = {},
        label = 'Register your Online Shop',
        checkboxStyling = {},
        textStyling = {},
        labelVisible = true,
        isChecked = true,
        handleCheck = () => { },
        iconStyling = {}
    } = props

    return <View style={[styles.container, styling]}>
        <RippleEffect style={[styles.checkbox, checkboxStyling]} onPress={handleCheck}>
            {isChecked && <AntDesign name="check" style={[styles.checkedIcon, iconStyling]} />}
        </RippleEffect>
        {labelVisible && <PrimaryHeading heading={label} styling={[styles.text, textStyling]} onPress={handleCheck} />}
    </View>
}