import { StyleSheet, I18nManager } from 'react-native';

//Theme
import { Metrics, Fonts, Color } from '../../theme';

//Constant
const { screenWidth } = Metrics
const { LatoBold } = Fonts
const { secondary, white, primary } = Color
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: secondary
    },
    items: {
        width: '20%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: screenWidth * 0.035,
        ...LatoBold
    }
})

export default styles