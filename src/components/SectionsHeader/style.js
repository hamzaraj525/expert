import { StyleSheet } from 'react-native';

//Theme
import { Metrics, Fonts, Color } from '../../theme';

//Constant
const { screenWidth, screenHeight } = Metrics
const { primary, secondary, white } = Color
const { LatoLight } = Fonts

const styles = StyleSheet.create({
    contanier : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    primaryContainer:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: secondary
    },
    secondaryContainer:{
        width: '95%',
        paddingVertical: 10,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: -20,
        backgroundColor: primary
    },
    primaryTextStyling:{
        color: white
    },
    secondaryTextStyling:{
        color: white,
        textAlign: 'center',
        fontSize: screenWidth * 0.03
    },
    descriptionContainer:{
        width: '92%',
        marginTop: 20
    },
    descriptionHeader:{
        color: white,
        fontSize: screenWidth * 0.04,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    descriptionStyling:{
        color: white,
        textAlign: 'center',
        fontSize: screenWidth * 0.028,
        lineHeight: 20,
        ...LatoLight
    }
})

export default styles