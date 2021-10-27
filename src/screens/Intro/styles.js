import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Color } from '../../theme'

//Constant
const { screenWidth, screenHeight } = Metrics
const { toastColor, primary, modalHeaderBg } = Color

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems : 'center'
    },
    title: {
        textAlign : 'center',
        marginTop : 30,
        fontSize : screenWidth * 0.045
    },
    description: {
        textAlign : 'center',
        fontSize : screenWidth * 0.028,
        color : toastColor
    },
    activeDotStyle: {
        backgroundColor : primary,
        marginBottom : screenHeight * 0.2

    },
    dotStyle: {
        backgroundColor : modalHeaderBg,
        marginBottom : screenHeight * 0.2
    },
    skipButton: {
        backgroundColor : 'white',
        borderColor : primary,
        borderWidth : 2
    },
    skipText: {
        color : primary
    }
})

export default styles