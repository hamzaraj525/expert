import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics, Fonts, Color } from '../../theme'

//Constants
const { screenWidth } = Metrics
const { LatoHeavy, LatoBold } = Fonts

const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer:{
        width: '90%',
        height: 180,
        marginVertical: 15
    },
    bannerContainer:{
        width: '100%',
        height: '100%'
    },
    pickerContainerStyling:{
        position: 'absolute',
        bottom: 5,
        right: 5
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    labelContainer: {
        width: '90%',
        marginTop: 10,
        marginBottom: 20
    },
    label: {
        ...LatoHeavy,
        fontSize: screenWidth * 0.04
    },
    inputsContainer: {
        width: '97%',
        alignItems: 'center',
    },
    inputsWrapper: {
        marginBottom: 10
    },
    inputs: {
        width: '95%',
        textAlign: flag ? 'right' : 'left',
    },
    labelStyling: {
        marginLeft: 15
    },
    descriptionContainer: {
        height: 120,
        alignItems: 'flex-start',
        marginBottom: 10
    },
    descriptionInput: {
        width: '95%',
        textAlign: 'left',
    },
    buttonContainer: {
        width: '95%',
        paddingVertical: 10,
        marginTop: 20
    },
    btnText: {
        ...LatoBold
    },
    makeMarginBottom: {
        marginBottom : 10
    }
})

export default styles