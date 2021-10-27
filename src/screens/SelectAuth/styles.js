import { StyleSheet } from 'react-native'

//Theme
import { Color, Metrics, Fonts } from '../../theme'

//Constants
const { white } = Color
const { screenHeight, screenWidth } = Metrics
const { LatoBold } = Fonts

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btnWrappers: {
        width: '100%',
        alignItems: 'center',
    },
    btnContainer: {
        width: '60%',
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: white,
        marginBottom : 20
    },
    btn: {
        width: '90%',
        paddingVertical: 7,
    },
    btnText: {
        ...LatoBold,
        fontSize: screenWidth * 0.045
    }
})

export default styles