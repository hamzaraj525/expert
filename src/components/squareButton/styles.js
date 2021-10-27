import { StyleSheet } from 'react-native'

//Theme
import { Color, Metrics, Fonts } from '../../theme'

//Constants
const { primary, white } = Color
const { screenWidth } = Metrics
const { LatoSemibold } = Fonts

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 60,
        backgroundColor: primary,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: screenWidth * 0.05,
        color: white,
        ...LatoSemibold
    },
    icon: {
        color : white,
        fontSize : screenWidth * 0.064,
        marginLeft : 7
    }
})

export default styles