import { StyleSheet, I18nManager } from 'react-native'

//Themes
import { Color, Metrics, Fonts } from '../../theme'
import { hasNotch } from '../../utils/helpers'

//Contants
const { primary, white } = Color
const { screenWidth } = Metrics
const { LatoRegular } = Fonts
const flag = I18nManager.isRTL

export default styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        padding: 10,
        marginTop:hasNotch ? 30 : 0,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    backIcons: {
        fontSize: screenWidth * 0.075,
        color: primary,
        marginHorizontal:4,
        transform: [{ rotate: flag ? '180deg' : '0deg'}],

    },
    titleText: {
        color: white,
        ...LatoRegular
    },
    iconWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconMargin: {
        marginLeft: 10
    },
    iconDimension: {
        width: 25,
        height: 25,
    },
    iconImg: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%'
    },
    titleText: {
        color : primary,
        marginLeft : 10
    }
})