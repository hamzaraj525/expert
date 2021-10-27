import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import * as AllActions from '../../redux/actions'

//Components
import { MyMap, Header, SectionsHeader, Input, PrimaryButton, Scrollbar } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { translateLang, warningToast } = Helpers

function Location(props) {
    const { loginReducer: { user: { address } } } = props
    const [customAddress, handleLocation] = useState(address)
    const [coords, handleCoords] = useState({ latitude: 0, longitude: 0 })

    const switchScreen = async () => {
        const { actions: { bookingDestinationAction } } = props
        const { loginReducer: { user: { city, country } } } = props
        if (!customAddress) return warningToast('Warning!', 'Enter your address.')
        if (!city || !country) return warningToast('Warning!', 'Update your profile in order to perform booking!')

        let payload = {
            address: customAddress,
            coords
        }
        await bookingDestinationAction(payload)
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return <View style={styles.container}>
        <Header
            isBack={true}
            isUser={false} />
        <Scrollbar>
            <SectionsHeader
                isCard={false}
                primaryContainer={styles.header}
                primaryText={changeLanguage('locationTitle')} />
            <MyMap containerStyling={styles.map}
                dragHandler={(e) => handleCoords(e)} isEdit={true}
            />
            <Input
                containerStyling={styles.input}
                value={customAddress}
                onChangeText={text => handleLocation(text)}
                placeholder={changeLanguage('place')}
                inputStyling={styles.inputText} />
            <PrimaryButton
                onPress={() => switchScreen()}
                rippleColor={secondary}
                styling={styles.btn}
                textStyling={styles.btnText}
                label={changeLanguage('continueButtonText')} />
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    loginReducer: state.loginReducer,
    bookingDestinationReducer: state.bookingDestinationReducer
})
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AllActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Location)