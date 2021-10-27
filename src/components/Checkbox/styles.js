import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Color } from '../../theme'

//Constant
const { screenWidth, screenHeight } = Metrics
const { secondary, primary } = Color

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems : 'center'
    },
    checkbox: {
        width: 27,
        height: 27,
        borderColor: secondary,
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginLeft: 7
    },
    checkedIcon: {
        color : primary,
        fontSize : 24
    }
})

export default styles