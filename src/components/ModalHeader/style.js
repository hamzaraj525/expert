import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Fonts, Metrics, Color } from '../../theme';

//Constant
const { LatoHeavy } = Fonts
const { screenWidth } = Metrics
const { secondary } = Color
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconWrapper: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backIcon: {
        fontSize : screenWidth * 0.06,
        color : secondary,
        transform: [{ rotate: flag ? '0deg' : '180deg' }]
    },
    textWrapper: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    nestedWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryText: {
        fontSize: screenWidth * 0.029,
        ...LatoHeavy
    },
    secondaryText: {
        fontSize: screenWidth * 0.031
    }
})

export default styles