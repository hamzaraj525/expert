import React, { useState } from 'react'
import { Text } from 'react-native'
import ImagePicker from 'react-native-image-picker'

//Icons
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

//Styles
import styles from './styles'

//Components
import { RippleEffect } from '../index'

//Theme
import { Color } from '../../theme'

//Constants
const { secondary, toastColor } = Color

export default function FileInput(props) {
    const [fileUri, handleFile] = useState('')

    const {
        styling = {},
        value = fileUri,
        placeholder = 'ATTACH FILE...',
        handler = () => { },
        rippleColor = secondary,
        labelStyling = {},
        iconStyling = {}
    } = props

    const selectFile = () => {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                const { fileName, uri } = response
                handleFile(fileName)
                handler(uri)
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            }
        });
    }

    return <RippleEffect rippleColor={rippleColor}
        rippleOpacity={0.1} rippleDuration={500}
        onPress={selectFile}
        style={[styles.fileContainer, styling]}>
        <Text style={[styles.label, labelStyling,{
            color : value ? secondary : toastColor
        }]}>{value ? value.length > 30 ? `${value.slice(0, 30)}...` : value : placeholder}</Text>
        <SimpleLineIcons name="cloud-upload" style={[styles.icon, iconStyling]} />
    </RippleEffect>
}