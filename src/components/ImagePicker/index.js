import React from 'react'
import ImagePicker from 'react-native-image-picker'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Styles
import styles from './style'

//Components
import { RadiusButton } from '../index'

export default function ImagePickers(props) {
    const {
        containerStyling = {},
        handler = () => { },
        styling = {}
    } = props

    const selectFile = () => {
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
                const { uri } = response
                handler(uri)
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            }
        });
    }

    return <RadiusButton styling={[styles.container, containerStyling]} onPress={selectFile} >
        <Ionicons name='image' style={[styles.iconStyling, styling]} />
    </RadiusButton>
}