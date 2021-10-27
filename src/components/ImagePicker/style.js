import { StyleSheet } from 'react-native'

//Theme
import { Color, Metrics } from '../../theme'

//Constants
const { white } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50
    },
    iconStyling: {
        fontSize: screenWidth * 0.07,
        color: white,
    }
})

export default styles