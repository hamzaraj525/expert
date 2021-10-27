import { StyleSheet } from 'react-native'

//Theme
import { Color, Metrics } from '../../theme'

//Constants
const { primary } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    btnContainer: {
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: primary,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: screenWidth * 0.049,
        color: primary,
    },
    loader: {
        position: 'absolute',
        right: 15
    }
})

export default styles