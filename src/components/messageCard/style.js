import { StyleSheet, I18nManager } from 'react-native';

//Theme
import { Metrics, Fonts } from '../../theme';

//Constant
const { screenWidth } = Metrics
const { LatoMedium } = Fonts
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginVertical : 20,
        paddingHorizontal:5
    },
    imageContainer: {
        width: screenWidth * 0.10,
        height: screenWidth * 0.10
    },
    imageStyling: {
        width: '100%',
        height: '100%',
    },
    msgContainer: {
        minWidth: 50,
        maxWidth: 200,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    message: {
        fontSize: screenWidth * 0.045,
        ...LatoMedium
    }
})

export default styles