import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics, Color } from '../../theme';

//Constant
const { screenWidth } = Metrics
const { toastColor, white } = Color
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: white,
        paddingHorizontal: 10,
        borderRadius:10
    },
    imgContainer: {
        height: '50%',
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    },
    headingContainer: {
        width: '75%',
        paddingHorizontal: 5,
        alignItems : 'flex-start'
    },
    titleStyling: {
        fontSize: screenWidth * 0.045,
        textAlign : 'right'
    },
    detailStyling: {
        fontSize: screenWidth * 0.03,
        color: toastColor
    },
    iconWrapper: {
        width: '10%',
        flexDirection: 'row',
    },
    forwardImage: {
        width: '60%',
        transform: [{ rotate: flag ? '180deg' : '0deg'}]
    }
})

export default styles