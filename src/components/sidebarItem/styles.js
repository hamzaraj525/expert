import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Color, Fonts } from '../../theme'

//Constant
const { screenWidth } = Metrics
const { toastColor } = Color
const { LatoLight } = Fonts

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    img: {
        width: 20,
        height: 20,
    },
    label: {
        fontSize: screenWidth * 0.035,
        marginLeft: 10
    },
    value: {
        color: toastColor,
        ...LatoLight,
        fontSize : screenWidth * 0.026,
        marginLeft: 10

    }
})

export default styles