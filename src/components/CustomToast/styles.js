import { StyleSheet } from 'react-native'

//Themes
import { Metrics, Color } from '../../theme'

//Constats
const { screenWidth } = Metrics
const { white, primary } = Color

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: white
    },
    icon: {
        width: screenWidth * 0.20,
        height: screenWidth * 0.20
    },
    headingWrapper: {
        textAlign: 'center',
        paddingVertical: 10
    },
    btnWrapper: {
        borderRadius: 5,
        backgroundColor: primary,
        width: '90%',
        paddingVertical : 3
    },
    text: {
        color: white,
        paddingVertical: 6,
        textAlign: 'center',
        width: '100%'
    }
})

export default styles