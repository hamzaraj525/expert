import { StyleSheet } from 'react-native'

//Themes
import { Color, Fonts, Metrics } from '../../theme'

//Constants
const { primary, white } = Color
const { LatoBold } = Fonts
const { screenHeight } = Metrics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        height: 50,
        paddingVertical: 10,
    },
    btn: {
        backgroundColor: primary,
        width: 220,
        paddingVertical: 8,
        borderRadius: 30,
        marginBottom: 10
    },
    btnText: {
        color: white,
        ...LatoBold
    }
})

export default styles