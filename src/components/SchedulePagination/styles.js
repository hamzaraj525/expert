import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics, Color } from '../../theme'

//Constants
const { screenWidth } = Metrics
const { primary, modalHeaderBg, toastColor , white } = Color
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    navHeader: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    // chevIcons: {
    //     color: primary,
    //     fontSize: screenWidth * 0.08,
    //     transform: [{ rotate: flag ? '180deg' : '0deg' }]
    // },
    calanderContainer:{
        // paddingHorizontal: 10,
        height: 40,
        width: '100%',
        borderRadius: 0,
        backgroundColor: primary
    },
    textStyling:{
        color: white
    },
    headerTitle: {
        fontSize: screenWidth * 0.045,
        color: primary
    },
    btn: {
        flex: 1,
        height: 40,
        borderRadius: 0,
        marginHorizontal: 5,
        marginTop: 12
    },
    btnText: {
        fontSize: screenWidth * 0.03
    },
    btnDisable: {
        backgroundColor: modalHeaderBg,
        borderColor: modalHeaderBg
    },
    textDisable: {
        color: toastColor
    },
    disableChevs: {
        width: 20,
        height: 20
    }
})

export default styles