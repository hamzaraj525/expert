import { StyleSheet } from 'react-native'

//Themes
import { Color, Metrics } from '../../theme'

//Constants
const { primary, white, secondary, } = Color
const { screenWidth } = Metrics

export default styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        overflow: 'hidden',
        borderRadius: 10,
        width: '90%',
        height: '70%',
        justifyContent: 'space-between',
    },
    header: {
        height: 90,
        width: '100%',
        backgroundColor: primary,
        alignItems: 'center',
    },
    ask: {
        paddingHorizontal: 10,
        fontSize: screenWidth * 0.045,
        paddingVertical: 10
    },
    suggest: {
        fontSize: screenWidth * 0.035,
        paddingTop: 10
    },
    section: {
        flex: 1,
        paddingLeft: 15,
        backgroundColor: white
    },
    scroll: {
        alignItems: 'flex-start'
    },
    ansContainer: {
        marginVertical: 10
    },
    ansText: {
        fontSize: screenWidth * 0.033
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainerPrimary: {
        backgroundColor: primary,
        borderRadius: 0,
        paddingHorizontal: 0,
        paddingVertical: 10,
        width: '50%'
    },
    buttonContainerSecondary: {
        backgroundColor: secondary,
        borderColor: secondary,
        paddingHorizontal: 0,
        borderRadius: 0,
        width: '50%'
    },
    button: {
        color: white,
        fontSize: screenWidth * 0.045
    }
})