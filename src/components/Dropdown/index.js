import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

//Icons
import Entypo from 'react-native-vector-icons/Entypo'

//Styles
import styles from './styles'

//Components
import { Modal, RippleEffect } from '../index'

//Theme
import { Color, Metrics } from '../../theme'

//Constants
const { secondary } = Color
const { screenWidth, screenHeight } = Metrics

export default function Dropdown(props) {
    const [selectedValue, handleValue] = useState('')
    const [isVisible, handleModal] = useState(false)

    const {
        styling = {},
        value = selectedValue,
        placeholder = 'COUNTRY',
        handler = () => { },
        data = ['Pakistan', 'China', 'Brazil'],
        rippleColor = secondary,
        labelStyling = {}
    } = props

    const toggleModal = () => {
        handleModal(!isVisible)
    }

    const toggleItem = item => {
        handleValue(item)
        handler(item)
        toggleModal()
    }

    const renderItems = () => {
        return <Modal isVisible={isVisible} handler={toggleModal}>
            <View style={styles.modalChild}>
                <View style={styles.dropdown}>
                    <View style={styles.dropdownHeader}>
                        <Text style={styles.headerText}>{placeholder}</Text>
                        <TouchableOpacity style={styles.crossContainer} onPress={toggleModal}>
                            <Entypo name="cross" style={styles.crossIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dropdownBody}>
                        <ScrollView contentContainerStyle={styles.scroller}>
                            {data.map((val, ind) => {
                                return <RippleEffect key={ind} style={styles.item} onPress={() => toggleItem(val)}>
                                    <Text style={styles.itemText}>{val}</Text>
                                </RippleEffect>
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Modal>
    }

    return <RippleEffect rippleColor={rippleColor}
        rippleOpacity={0.1} rippleDuration={500}
        onPress={toggleModal}
        style={[styles.dropdownContainer, styling]}>
        <Text style={[styles.label, labelStyling]}>{value ? value : placeholder}</Text>
        <Entypo name="chevron-down" style={styles.dropdownIcon} />
        {renderItems()}
    </RippleEffect>
}