import { StyleSheet, I18nManager } from 'react-native'

//Themes
import { Color, Metrics } from '../../theme'

//Constant
const { secondary, modalHeaderBg } = Color
const { screenWidth } = Metrics
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerColor: {
        backgroundColor: secondary
    },
    makeMargin: {
        marginVertical: 15
    },
    imgContainer: {
        width: 50,
        height: 50
    },
    inboxCard: {
        elevation: 0,
        width: '95%',
        backgroundColor: modalHeaderBg,
        marginBottom: 15
    },
    chevIcon: {
        fontSize : screenWidth * 0.07,
        color: secondary,
        transform : [{rotate : flag ? '0deg' : '180deg'}]
    }
})

export default styles