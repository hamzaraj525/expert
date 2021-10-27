import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Metrics } from '../../theme'

//Constant
const { screenWidth } = Metrics
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    primary:{
        paddingVertical: 0,
    },
    text:{
        fontSize: screenWidth * 0.05
    },
    timeHeading: {
        textAlign : 'left',
        paddingHorizontal: '14%',
        fontSize: screenWidth * 0.04
    }
})

export default styles