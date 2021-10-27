import { StyleSheet, I18nManager } from 'react-native';

//Theme
import { Metrics, Color, Fonts } from '../../theme';

//Constant
const { screenWidth } = Metrics
const { primary, white } = Color
const { LatoHeavy } = Fonts
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    detailStyling: {
        flexDirection: 'row',
        alignItems : 'center'
    },
    imageContainer: {
        width: screenWidth * 0.2,
        height: screenWidth * 0.2,
        borderRadius: 100,
        marginRight: 5
    },
    imageStyling: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 100
    },
    descriptionContainer: {
        width: '75%',
        paddingVertical: 10,
        paddingRight: 5,
        alignItems: 'flex-start'
    },
    titleStyling: {
        fontSize: screenWidth * 0.05,
        ...LatoHeavy
    },
    descriptionStyling: {
        fontSize: screenWidth * 0.035
    },
    timeStyling: {
        fontSize: screenWidth * 0.04
    },
    buttonWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyling: {
        width: '60%',
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: primary
    },
    text: {
        color: white,
        fontSize: screenWidth * 0.04,
        marginLeft: 2
    },
    icon: {
        color: white,
        fontSize: screenWidth * 0.05
    }
})

export default styles