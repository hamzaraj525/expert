import React from 'react'
import { View, I18nManager } from 'react-native'
import RNRestart from 'react-native-restart';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Methods
import * as setLanguageAction from '../../redux/actions/setLanguageAction'

//Components
import { BgWrapper, ImageView, PrimaryButton } from '../../components'

//Utils
import { Images } from '../../utils'

//Constants
const { transparent_logo } = Images

//Styling
import styles from './styles'

function SelectLanguage(props) {

    const nextScreen = async (language) => {
        const { actions: { setLanguageAction } } = props
        setLanguageAction(language)
        await I18nManager.forceRTL(language === 'ur')
        RNRestart.Restart()
    }

    return (
        <BgWrapper overlay={true} overlayStyling={styles.container}>
            <View style={styles.contentContainer}>
                <ImageView local={transparent_logo} />
                <View style={styles.btnContainer}>
                    <PrimaryButton label='ENGLISH' styling={styles.btn} textStyling={styles.text} onPress={() => nextScreen('en')} />
                    <PrimaryButton label='اردو' styling={styles.btn} textStyling={styles.text} onPress={() => nextScreen('ur')} />
                </View>
            </View>
        </BgWrapper>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguage: state.setLanguageReducer.selectedLanguage
})

const mapDispatchToProp = (dispatch) => {
    return {
        actions: bindActionCreators(setLanguageAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(SelectLanguage)