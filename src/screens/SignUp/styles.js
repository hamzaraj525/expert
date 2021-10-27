import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics, Fonts, Color } from '../../theme'

//Constants
const { screenWidth, screenHeight } = Metrics
const { LatoHeavy } = Fonts
const { primary, white } = Color

const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        width: screenWidth * 0.4
    },
    heading: {
        ...LatoHeavy,
        marginBottom: screenHeight * 0.08
    },
    inputsContainer: {
        width: '95%'
    },
    inputs: {
        marginBottom: 10
    },
    checkBoxContainer: {
        width: '95%'
    },
    checkboxes: {
        marginTop: 20
    },
    btn: {
        backgroundColor: primary,
        marginTop: 30
    },
    btnText: {
        color: white,
        ...LatoHeavy,
        fontSize: screenWidth * 0.04,
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    privacyCheckbox: {
        marginTop: 40,
        marginRight: 20,
        width: '60%'
    },
    privacyText: {
        fontSize: screenWidth * 0.022,
        textAlign: 'center'
    },
    signUpFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    descriptionPrimary: {
        fontSize: screenWidth * 0.036,
        ...LatoHeavy
    },
    descriptionSecondary: {
        color: primary,
        ...LatoHeavy,
        fontSize: screenWidth * 0.05
    },
    emailInput: {
        width: '92%',
        textAlign: flag ? 'right' : 'left'
    },
    passwordsInput: {
        width: '60%',
        textAlign: flag ? 'right' : 'left'
    },
    passwordLabel: {
        fontSize: screenWidth * 0.035
    },
    passwordsInputsContainer: {
        paddingHorizontal: 14,
        justifyContent: 'space-between',
        marginBottom: 10
    }
})

export default styles