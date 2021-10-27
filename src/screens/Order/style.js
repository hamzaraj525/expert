import { StyleSheet } from 'react-native'

//Theme
import { Metrics } from '../../theme'

//Constant
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize : screenWidth * 0.035,
        paddingVertical: 20
    },
    cardWrapper:{
        paddingHorizontal: 20
    }
})

export default styles