import { StyleSheet } from 'react-native'

//Theme
import { Metrics } from '../../theme'

//Constant
const { screenWidth } = Metrics
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: screenWidth * 0.04
    }
})

export default styles