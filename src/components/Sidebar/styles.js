import { StyleSheet } from 'react-native'

//Themes
import { Metrics, Color, Fonts } from '../../theme'

//Constants
const { screenWidth } = Metrics
const { modalHeaderBg } = Color
const { LatoHeavy, LatoLight } = Fonts

const styles = StyleSheet.create({
    overlayContainer: {
        width: '100%',
    },
    imgContainer: {
        width: '100%',
        height: '16%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: screenWidth * 0.5
    },
    sidebarHeader: {
        backgroundColor: modalHeaderBg
    },
    menu: {
        height: '59%',
        backgroundColor: '#fff'
    },
    listItem: {
        marginTop: 10,
        paddingBottom: 10
    },
    bottomContainer: {
        backgroundColor: modalHeaderBg,
        alignItems: 'center',
        height: '17%'
    },
    footerHeading: {
        marginTop: 18,
        fontSize: screenWidth * 0.045,
        ...LatoHeavy
    },
    footerContentContainer: {
        flexDirection: 'row',
        width: '55%',
        justifyContent: 'space-between',
        marginTop: 18
    },
    radiusContainer: {
        backgroundColor: 'transparent'
    },
    sharingIcons: {
        width: '100%',
        height: '100%'
    },
    langButton: {
        position: 'absolute',
        right: 20,
        width: 35,
        height: 35
    },
    langText: {
        fontSize : screenWidth * 0.035,
        ...LatoLight
    }
})

export default styles