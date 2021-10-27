import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Fonts, Color } from '../../theme'

//Constant
const { screenWidth, screenHeight } = Metrics
const { primary, secondary } = Color
const { LatoHeavy } = Fonts

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer:{
        width: '100%'
    },
    image:{
        resizeMode: 'cover',
        width: '100%',
        height: screenHeight * 0.25
    },
    iconStyling: {
        fontSize: screenWidth * 0.06,
        color: primary
    },
    textContaier:{
        paddingHorizontal: 12,
        paddingBottom: 5,
    },
    primaryText:{
        color: primary,
        fontSize: screenWidth * 0.045,
        ...LatoHeavy
    },
    secondaryStyling:{
        color: secondary,
        paddingHorizontal: 12,
        fontSize: screenWidth * 0.035
    }
})

export default styles