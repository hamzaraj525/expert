import { StyleSheet } from 'react-native'

//Theme
import { Color } from '../../theme'

//Constants
const { inputBg, secondary } = Color

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headingContainer: {
        width: '95%',
        paddingTop: 20,
        paddingBottom: 5
    },
    resolvedCards: {
        backgroundColor: inputBg
    },
    appointmentsCards: {
        borderWidth : 1
    },
    makeBg: {
        backgroundColor : secondary
    }
})

export default styles