import { StyleSheet } from 'react-native'

//Themes
import { Color, Metrics, Fonts } from '../../theme'

//Constants
const { primary, white, secondary, } = Color
const { screenWidth } = Metrics
const { LatoBold } = Fonts


export default styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    header: {
        marginVertical: 15,
        width: '100%',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10
    },
    buttonContainer: {
        backgroundColor: primary,
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    button: {
        ...LatoBold,
        color: white,
        fontSize: screenWidth * 0.043
    }
})