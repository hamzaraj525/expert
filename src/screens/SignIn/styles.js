import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Fonts, Color } from '../../theme'

//Constant
const { screenWidth, screenHeight } = Metrics
const { LatoBold, LatoHeavy } = Fonts
const { primary, white } = Color

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img: {
        marginTop: screenHeight * 0.08
    },
    inputsContainer: {
        width: '95%',
        marginTop: screenHeight * 0.1
    },
    inputs: {
        marginBottom: 10
    },
    btn: {
        marginTop: screenHeight * 0.05,
        paddingVertical: 9,
        width: '60%'
    },
    btnText: {
        ...LatoBold
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: screenHeight * 0.05,
    },

    descriptionPrimary: {
        fontSize: screenWidth * 0.036,
        ...LatoHeavy
    },
    descriptionSecondary: {
        color: primary,
        ...LatoHeavy,
        fontSize: screenWidth * 0.05
    },
    signupContainer:{
        marginTop: screenWidth * 0.10,
        marginBottom: screenWidth * 0.10
    },
    btnWrapper:{
        justifyContent: 'space-between',
        marginTop: 20,
        flexDirection: 'row'
    },
    icon:{
        color: white,
        fontSize: screenWidth * 0.05
    },
    google:{
        width : 55,
        height: 55,
        marginHorizontal : 5,
        backgroundColor: '#c5221e'
    },
    facebook: {
        width : 55,
        height: 55,
        marginHorizontal : 5,
        backgroundColor: '#1976f2'
    }
})

export default styles