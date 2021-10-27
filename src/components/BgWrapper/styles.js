import { StyleSheet } from 'react-native'

//Theme
import { Metrics } from '../../theme'

//Constants
const { screenWidth, screenHeight } = Metrics

const styles = StyleSheet.create({
    bgStyling: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    overlayContainer: {
        width: screenWidth,
        height: screenHeight,
        position: 'absolute',
        zIndex: 1000
    }
})

export default styles