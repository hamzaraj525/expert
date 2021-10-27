import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics, Fonts, Color } from '../../theme'

//Constant
const { screenWidth } = Metrics
const { LatoMedium } = Fonts
const { primary, white } = Color
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: primary
    },
    titileContainer: {
        flexDirection: flag ? 'row-reverse' : 'row',
        marginBottom: 15
    },
    titleText: {
        width: '55%',
        justifyContent: flag ? 'flex-end' : 'flex-start',
        fontSize: screenWidth * 0.045,
    },
    dateContainer: {
        width: '45%',
        alignItems : 'flex-end',
        paddingTop: 2
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonText: {
        color: white,
        fontSize: screenWidth * 0.035,
    },
    button: {
        height: 30,
        borderRadius: 12, 
        backgroundColor: primary,
    },
    date: {
        fontSize: screenWidth * 0.03,
        ...LatoMedium
    },
    time: {
        fontSize: screenWidth * 0.03,
        ...LatoMedium
    },
    iconStyling:{
        color: primary,
        fontSize: screenWidth * 0.05,
        transform: [{rotate : flag ? '180deg' : '0deg'}]
    }
})

export default styles