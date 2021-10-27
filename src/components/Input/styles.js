import { StyleSheet } from 'react-native'

//Theme
import { Color, Fonts, Metrics } from '../../theme'

//Constants
const { screenWidth } = Metrics
const { inputBg, secondary } = Color
const { LatoBold } = Fonts

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: inputBg,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    input: {
        minWidth: '40%',
        textAlign: 'center',
        ...LatoBold,
        color: secondary
    },
    iconContainer: {
        width: 28,
        height: 28,
        position: 'absolute',
        right: 20,
        borderRadius: 100,
        justifyContent: 'center'
    },
    icon: {
        // resizeMode : 'contain',
        width: '100%',
        height: '100%'
    }
})

export default styles