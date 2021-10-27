import { StyleSheet } from 'react-native'

//Theme
import { Color, Metrics, Fonts } from '../../theme'

//Constants
const { secondary } = Color
const { screenWidth } = Metrics
const { LatoBold } = Fonts

const styles = StyleSheet.create({
    heading: {
        fontSize : screenWidth * 0.045,
        color : secondary,
        ...LatoBold
    }
})

export default styles