import { StyleSheet } from 'react-native'

//Themes
import { Color, Metrics, Fonts } from '../../theme'

//Constants
const { primary, white } = Color
const { screenWidth } = Metrics
const { LatoBold } = Fonts


export default styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    header: {
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    timerContainer: {
        marginBottom: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%'
    },
    inputContainer: {
        width: '73%',
    },
    input:{
        width: '90%'
    },
    timerHeadingWrap: {
        width: '25%'
    },
    timerHeading: {
        fontSize: 10, 
        textAlign: 'center'
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