import { StyleSheet } from 'react-native'

//Theme
import {  Color } from '../../theme'

//Constant
const { primary, secondary } = Color

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textContainer:{
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: secondary,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusIcon: {
        backgroundColor: primary,
        borderRadius: 0

    },
    minusIcon: {
        backgroundColor: secondary,
        borderRadius: 0
    }
})

export default styles