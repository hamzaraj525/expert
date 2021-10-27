import { StyleSheet } from 'react-native'

//Theme
import { Color, Metrics } from '../../theme'

//Constants
const { primary, white } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: white,
        fontSize: screenWidth * 0.08
    }
})

export default styles