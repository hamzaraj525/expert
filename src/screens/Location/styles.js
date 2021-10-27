import { StyleSheet, I18nManager } from 'react-native'

//Themes
import { Color, Fonts, Metrics } from '../../theme'

//Constants
const { primary, white } = Color
const { LatoBold } = Fonts
const { screenHeight } = Metrics
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        height: 50,
        paddingVertical: 10,
    },
    map: {
        height: screenHeight * 0.68,
        borderWidth: 0
    },
    input: {
        marginVertical: 10,
        justifyContent: 'flex-start'
    },
    inputText: {
        width: '100%',
        textAlign: flag ? 'right' : 'left',
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: primary,
        width: 220,
        paddingVertical: 8,
        borderRadius: 30
    },
    btnText: {
        color: white,
        ...LatoBold
    }
})

export default styles