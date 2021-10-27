import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics, Fonts, Color } from '../../theme'

//Constant
const { screenWidth } = Metrics
const { primary, white } = Color
const { LatoHeavy } = Fonts

const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        alignItems: 'center',
        paddingBottom: 20
    },
    imageContainer:{
        width : '90%',
        height : 180,
        marginVertical : 20,
    },
    bannerContainer: {
        width : '100%',
        height : '100%'
    },
    banner: {
        width : '100%',
        height : '100%',
        resizeMode : 'cover',
        borderRadius:10

    },
    buttonContainer:{
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    input: {
        width: '90%',
        justifyContent: 'flex-start',
        paddingHorizontal: 12,
        marginBottom: 10,
        borderRadius:10
    },
    inputText: {
        width: '100%',
        textAlign: flag ? 'right' : 'left'
    },
    dropdown: {
        width: '90%',
        marginBottom: 10,
        borderRadius:10
    },
    dropdownLabel: {
        marginLeft: 10
    },
    button: {
        backgroundColor: primary,
        borderRadius: 0,
        paddingVertical: 10,
        width: '90%',
        marginTop: 20
    },
    buttonText: {
        ...LatoHeavy,
        color: white,
        fontSize: screenWidth * 0.055
    }
})

export default styles