import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Color } from '../../theme'

//Constants
const { screenHeight } = Metrics
const { secondary } = Color

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: screenHeight * 0.7,
        borderWidth: 1,
        borderColor: secondary
    },
    map: {
        flex: 1
    }
})