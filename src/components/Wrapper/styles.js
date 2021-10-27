import { StyleSheet } from 'react-native'

//Themes
import { Metrics, Fonts, Color } from '../../theme'

//Constats
const { screenHeight, screenWidth } = Metrics
const { LatoRegular } = Fonts
const { white } = Color

export default styles = StyleSheet.create({
    container: {
        height: screenHeight,
        width: screenWidth,
    },
    imgContainer: {
        width: screenWidth,
        height: screenHeight * 0.35,
    },
    img: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        width: screenWidth,
        height: screenHeight * 0.35,
        alignItems: 'center'
    },
    avatarContainer: {
        marginBottom: 10,
        width: screenWidth * 0.24,
        height: screenWidth * 0.24,
    },
    avatar: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: screenWidth * 0.24,
    },
    heading: {
        ...LatoRegular,
        color: white,
        fontSize: screenWidth * 0.06
    },
    sectionBottom: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'pink'
    }
})