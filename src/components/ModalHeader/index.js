import React from 'react'
import { View } from 'react-native'

//Component
import { PrimaryHeading, RippleEffect } from '../../components';

//Icon
import AntDesign from 'react-native-vector-icons/AntDesign';

//Styling
import styles from './style';

export default function ModalHeader(props) {
    const {
        containerStyling = {},
        order = 'PLEASE LOGIN TO CONTINUE YOUR ORDER',
        text = 'PLEASE INSERT VERIFICATION CODE',
        code = 'Verification code send to 00012345678',
        isDetail = true,
        backIcon = <AntDesign name='arrowright' style={styles.backIcon} />,
        handleBack = () => {}
    } = props

    return <View style={[styles.container, containerStyling]}>
        <RippleEffect containerStyle={styles.iconWrapper} onPress={handleBack} >
            {backIcon}
        </RippleEffect>
        <View style={styles.textWrapper}>
            {isDetail ? <PrimaryHeading heading={order} styling={styles.primaryText} /> :
                <View style={styles.nestedWrapper} >
                    <PrimaryHeading heading={text} styling={styles.primaryText} />
                    <PrimaryHeading heading={code} styling={styles.secondaryText} />
                </View>
            }
        </View>
    </View>
}