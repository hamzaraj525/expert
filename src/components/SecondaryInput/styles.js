import { StyleSheet, I18nManager } from "react-native"

//Themes
import { Color, Metrics, Fonts } from '../../theme'

//Contants
const { primary, secondary } = Color
const { screenWidth } = Metrics
const { LatoBold } = Fonts
const flag = I18nManager.isRTL

export default styles = StyleSheet.create({
    container: {
        borderColor: primary,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    imgContainer: {
        width: 35,
    },
    img: {
        width: 25,
        height: 25,
        borderRadius: 100
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        fontSize: screenWidth * 0.03,
        color: secondary,
        ...LatoBold
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sendIcon: {
        fontSize: screenWidth * 0.08,
        color: secondary,
        transform: [{
            rotate: flag ? '180deg' : '0deg'
        }]
    }
})