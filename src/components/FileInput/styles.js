import { StyleSheet } from 'react-native'

//Theme
import { Color, Metrics, Fonts } from '../../theme'

//Constants
const { inputBg, secondary, toastColor } = Color
const { screenWidth } = Metrics
const { LatoMedium } = Fonts

const styles = StyleSheet.create({
    fileContainer: {
        width: '100%',
        height: 50,
        backgroundColor: inputBg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: screenWidth * 0.038,
        color: toastColor,
        marginLeft: 25,
        ...LatoMedium
    },
    icon: {
        fontSize: screenWidth * 0.07,
        color: secondary,
        marginRight: 15
    }
})

export default styles