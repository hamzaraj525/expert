import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Fonts } from '../../theme'

//Constant
const { screenWidth } = Metrics
const { LatoHeavy } = Fonts

const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.3,
        alignItems: 'center'
    },
    imageContainer: {
        width: screenWidth * 0.22,
        height: screenWidth * 0.22,
        marginBottom: 7
    },
    img: {
        borderRadius: 17,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    textContainer: {
        width: '90%',
        textAlign: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: screenWidth * 0.03,
        ...LatoHeavy
    }
})

export default styles