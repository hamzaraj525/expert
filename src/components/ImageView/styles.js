import { StyleSheet } from 'react-native'

//Themes
import { Metrics } from '../../theme'

//Constants
const { screenWidth, screenHeight } = Metrics

const styles = StyleSheet.create({
    img: {
        resizeMode: 'contain',
        width: screenWidth * 0.7,
        height: screenHeight * 0.2
    }
})

export default styles