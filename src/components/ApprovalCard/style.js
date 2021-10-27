import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics, Color, Fonts } from '../../theme'

//Constant
const { screenWidth } = Metrics
const { primary, secondary } = Color
const { LatoMedium } = Fonts
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '95%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        borderColor: secondary,
        marginBottom : 10
    },
    imageWrapper: {
        width: 130,
        height: 130,
        marginBottom: 10
    },
    imageContainer: {
        width: 120,
        height: 120,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        width: 80,
        position: 'absolute',
        left: 20,
        top: 40
    },
    text: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: screenWidth * 0.06,
        ...LatoMedium
    },
    month: {
        textAlign: 'center',
        marginTop: -12,
        fontSize: screenWidth * 0.06,
        ...LatoMedium
    },
    year: {
        textAlign: 'center',
        fontSize: screenWidth * 0.06,
        ...LatoMedium,
        marginTop: 5
    },
    iconStyling: {
        fontSize: screenWidth * 0.08,
        color: primary,
        transform : [{
            rotate : flag ? '180deg' : '0deg'
        }]
    }
})

export default styles