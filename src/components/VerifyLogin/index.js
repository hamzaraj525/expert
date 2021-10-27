import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Components
import { Modal, Input, PrimaryButton, ModalHeader } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { translateLang } = Helpers

const VerifyLogin = (props) => {
    const {
        handleLogin = () => { },
        handleBack = () => { },
        isVisible = false
    } = props

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.container}>
                <ModalHeader
                    order={changeLanguage('loginForOrder')}
                    handleBack={handleBack}
                    containerStyling={styles.header} />
                <Input keyboardType='numeric' containerStyling={styles.inputContainer} placeholder={changeLanguage('mobileNumberText')} />
                <PrimaryButton
                    onPress={handleLogin}
                    styling={styles.buttonContainer}
                    rippleContainerBorderRadius={10}
                    textStyling={styles.button}
                    label={changeLanguage('login')}
                    rippleColor={secondary} />
            </View>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(VerifyLogin)