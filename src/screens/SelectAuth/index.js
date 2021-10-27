import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';

//Components
import { BgWrapper, ImageView, PrimaryButton } from '../../components'

//Utils
import { Navigator, Images, Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { navigate } = Navigator
const { transparent_logo } = Images
const { translateLang } = Helpers

const SelectAuth = (props)=> {

    const nextScreen = route => {
        navigate(route)
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return (
        <BgWrapper overlay={true} overlayStyling={styles.container}>
            <ImageView local={transparent_logo} />
            <View style={styles.btnWrappers}>
                <View style={styles.btnContainer}>
                    <PrimaryButton label={changeLanguage('login')}
                        onPress={() => nextScreen('SignInStack')}
                        textStyling={styles.btnText} styling={styles.btn} />
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton label={changeLanguage('createAccount')}
                        onPress={() => nextScreen('SignUpStack')}
                        textStyling={styles.btnText} styling={styles.btn} />
                </View>
            </View>
        </BgWrapper>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(SelectAuth)