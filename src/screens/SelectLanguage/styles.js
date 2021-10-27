import { StyleSheet } from 'react-native'

//Utils
import { Color, Fonts } from '../../theme'

//Constant
const { inputBg }  = Color
const { LatoMedium } = Fonts

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },
    contentContainer: {
        width: '100%', 
        height: '62%', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingBottom: 20
    },
    btnContainer: {
        flexDirection: 'row', 
        paddingHorizontal: 10, 
        justifyContent: 'space-between', 
        width: '100%'
    },
    btn: {
        width: '46%', 
        paddingVertical: 10,
        borderColor: inputBg,
        borderWidth: 0.5,
        borderRadius: 15
    },
    text: {
        color: inputBg,
        ...LatoMedium 
    }
})

export default styles