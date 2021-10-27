import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Components
import { PrimaryHeading, OrderCard, Scrollbar, Feedback, PrimaryButton, ImageView } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Images, Navigator, Helpers } from '../../utils'

//Action
import * as AllActions from '../../redux/actions'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { icon_checkmark } = Images
const { navigate } = Navigator
const { translateLang, warningToast } = Helpers


function OrderSuccess(props) {
    const [reason, handleReason] = useState('')
    const [toogle, setToogle] = useState(false)

    const handleFeedback = () => {
        setToogle(!toogle)
        handleReason('')
    }

    const switchScreen = () => {
        navigate('ServiceStack')
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const cancelOrder = () => {
        if (!reason) return warningToast('Warning', 'Select any reason!')
        const { actions: { cancelBookingAction },
            bookingReducer: { booking: { id } } } = props
        handleFeedback()
        handleReason('')
        cancelBookingAction(id)
    }

    const { bookingReducer: { booking },
        cancelBookingReducer: { isLoading }
    } = props

    return <View style={styles.container}>
        <View style={styles.header} />
        <Scrollbar>
            <View style={styles.messageContainer}>
                <ImageView local={icon_checkmark} containerStyling={styles.imgContainer} styling={styles.img} />
                <PrimaryHeading
                    styling={styles.message}
                    heading={changeLanguage('successTitle')} />
                <PrimaryHeading
                    styling={styles.description}
                    heading={changeLanguage('successDescription')} />
            </View>
            <OrderCard loading={isLoading} data={booking} containerStyling={styles.orderCard} onPress={handleFeedback} />
        </Scrollbar>
        <View style={styles.buttonContainer}>
            <PrimaryButton
                onPress={switchScreen}
                rippleContainerBorderRadius={0}
                label={changeLanguage('mainPage')}
                styling={styles.buttonContainerSecondary}
                textStyling={styles.button} />
            <PrimaryButton
                onPress={() => navigate('MyOrderStack')}
                rippleContainerBorderRadius={0}
                rippleColor={secondary}
                label={changeLanguage('orderHistory')}
                styling={styles.buttonContainerPrimary}
                textStyling={styles.button} />
        </View>
        <Feedback selectOption={reason => handleReason(reason)} selected={reason} isVisible={toogle} keepOrder={handleFeedback} cancelOrder={cancelOrder} />
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    bookingReducer: state.bookingReducer,
    cancelBookingReducer: state.cancelBookingReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(AllActions, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSuccess)