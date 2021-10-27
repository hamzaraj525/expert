import { StyleSheet } from 'react-native';

//Theme
import { Fonts, Metrics, Color } from '../../theme'

//Constant
const { LatoMedium } = Fonts
const { primary } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyling:{
        paddingHorizontal: 20,
        marginBottom: 20,
        fontSize: screenWidth * 0.04,
        ...LatoMedium
    },
    sidebarItemStyling:{
        paddingVertical: 5,
    },
    iconStyling:{
        color: primary,
    },
    userSize: {
        fontSize: screenWidth * 0.055
    },
    phoneSize:{
        fontSize: screenWidth * 0.04
    },
    emailSize:{
        fontSize: screenWidth * 0.045
    },
    bottomContainer: {
        width: '100%',
        height: '17%',
        marginTop: '10%',
        alignItems: 'center',
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
    img: {
        width : screenWidth * 0.5
    }
})

export default styles