import { StyleSheet } from 'react-native'

//Theme
import {Color, Metrics} from '../../theme'

//Constant
const {primary, white } = Color
const {screenWidth} = Metrics

const styles = StyleSheet.create({
    container : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primary,
        paddingVertical: 5
    },
    text:{
        color: white,
        fontSize: screenWidth * 0.05
    }
})

export default styles