import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Components
import { Modal, PrimaryHeading, PrimaryButton, ImageView } from '../../components'

//Utils
import { Images, Helpers } from '../../utils'

//Themes
import { Color } from '../../theme'

//Styles
import styles from './styles'

//Constants
const { icon_checkmark } = Images
const { secondary } = Color
const { translateLang } = Helpers

function CustomToast(props) {
    const {
        message = 'Login successfull, please complete your order',
        btnLabel = 'Continue',
        onPress = () => { },
        renderButtons,
        isVisible = false,
        dynamics = false
    } = props

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return (
        <Modal isVisible={isVisible}>
            <View style={styles.container}>
                <ImageView local={icon_checkmark} containerStyling={styles.icon} styling={styles.icon} />
                <View style={styles.headingWrapper}>
                    <PrimaryHeading heading={changeLanguage('loginSuccessText')} styling={styles.headingWrapper} />
                </View>
                {renderButtons ? renderButtons() : <PrimaryButton loading={dynamics} disabled={dynamics} label={changeLanguage('continueButtonText')} rippleColor={secondary} styling={styles.btnWrapper} rippleContainerBorderRadius={5} textStyling={styles.text} onPress={onPress} loaderColor={secondary} />}
            </View>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(CustomToast)