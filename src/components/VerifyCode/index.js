import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Components
import { Modal, Input, PrimaryButton, PrimaryHeading, ModalHeader } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { translateLang } = Helpers

const VerifyCode = (props) => {
    const {
        handleVerify = () => { },
        handleBack = () => { },
        isVisible = false
    } = props

    const [timer, setTimer] = useState(60)

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    if (isVisible) {
        setTimeout(() => {
            if (timer != 0) {
                setTimer(timer - 1)
            }
        }, 1000)
    }

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.container}>
                <ModalHeader
                    text={changeLanguage('verificationTitle')}
                    code={`${changeLanguage('verificationNumber')} 021345678`}
                    isDetail={false}
                    handleBack={handleBack}
                    containerStyling={styles.header} />
                <View style={styles.timerContainer}>
                    <Input
                        containerStyling={styles.inputContainer}
                        placeholder={changeLanguage('verificationCode')}
                        inputStyling={styles.input} />
                    <View style={styles.timerHeadingWrap}>
                        <PrimaryHeading
                            styling={styles.timerHeading}
                            heading={`${changeLanguage('codeResend')} ${timer}`} />
                    </View>
                </View>
                <PrimaryButton
                    onPress={handleVerify}
                    styling={styles.buttonContainer}
                    rippleContainerBorderRadius={10}
                    textStyling={styles.button}
                    label={changeLanguage('veriyCode')}
                    rippleColor={secondary} />
            </View>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(VerifyCode)