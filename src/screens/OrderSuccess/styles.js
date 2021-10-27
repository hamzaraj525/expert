import { StyleSheet } from 'react-native'

//Themes
import { Color, Metrics } from '../../theme'

//Constants
const { primary, white, secondary, } = Color
const { screenWidth, screenHeight } = Metrics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        height: screenHeight * 0.1,
        width: screenWidth,
        backgroundColor: primary
    },
    messageContainer: {
        width: screenWidth * 0.9,
        alignItems: 'center',
        marginVertical: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: primary
    },
    message: {
        fontSize: screenWidth * 0.065
    },
    description: {
        textAlign: 'center',
        lineHeight: 18,
        marginVertical: 15,
        fontSize: screenWidth * 0.04
    },
    orderCard: {
        marginBottom: 20
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
        color: white
    },
    imgContainer: {
        width : 100,
        height : 100,
        marginVertical : 10
    },
    img: {
        width : '100%',
        height : '100%'
    }
})

export default styles