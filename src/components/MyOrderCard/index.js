import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Styling
import styles from './style'

//Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'

//Component
import { PrimaryButton, PrimaryHeading, RippleEffect } from '../../components'

//Theme
import { Color } from '../../theme'

//Constant
const { secondary } = Color

function MyOrderCard(props) {
    const {
        containerStyling = {},
        data = {},
        onPress = () => { }
    } = props
    
    const {
        bookingtime = '11:30 AM',
        bookingdate = '30/10/2020',
        bookingstatus = 'Pending',
        service_id = 0
    } = data

    return <RippleEffect style={[styles.container, containerStyling]} onPress={onPress}>
        <View style={styles.titileContainer}>
            <PrimaryHeading heading={service_id} styling={styles.titleText} />
            <View style={styles.dateContainer} >
                <PrimaryHeading heading={bookingtime} styling={styles.time} />
                <PrimaryHeading heading={bookingdate} styling={styles.date} />
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <PrimaryButton label={bookingstatus.toUpperCase()} disabled={true} textStyling={styles.buttonText} styling={styles.button} rippleColor={secondary} onPress={onPress} />
            <FontAwesome name='chevron-right' style={styles.iconStyling} />
        </View>
    </RippleEffect>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(MyOrderCard)