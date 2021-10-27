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
    },
    bannerContainer: {
        width : '90%',
        height : 180,
        marginVertical : 20
    },
    banner: {
        width : '100%',
        height : '100%',
        resizeMode : 'cover',
        borderRadius:10

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
    },
    messageInput:{
        width: '90%',
        height: 120,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 12,
        marginBottom: 10,
        borderRadius:10

    }
})

export default styles