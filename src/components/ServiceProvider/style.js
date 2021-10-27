import { StyleSheet, I18nManager } from 'react-native';

//Theme
import { Color, Metrics, Fonts } from '../../theme'

//Constant
const { screenWidth } = Metrics
const {LatoBold , LatoRegular, LatoHeavy} = Fonts
const { primary, white } = Color
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container : {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        paddingVertical: 8,
    },
    alphaStyling:{
        width: '25%',
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    imageContainer:{
        width: 90,
        height: 90,
        borderRadius: 100,
    },
    image:{
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    betaStyling:{
        width: '55%',
        alignItems : 'flex-start',
        paddingLeft: 15,
        paddingVertical: 5
    },
    text:{
        fontSize: screenWidth * 0.035,
        marginBottom: 1,
        ...LatoHeavy
    },
    description:{
        textAlign : 'left',
        fontSize: screenWidth * 0.027,
        marginTop: 1,
        ...LatoRegular
    },
    rating:{
        width: '32%'
    },
    cashContainer:{
        width: '100%',
        flexDirection: 'row'
    },
    pay:{
        fontSize: screenWidth * 0.027,
        ...LatoBold
    },
    labelContainer:{
        paddingHorizontal: 0,
        paddingVertical: 0
    },
    dollar:{
        width: 12,
        height: 12,
        marginLeft:-5
    },
    labelText:{
        fontSize: screenWidth * 0.027,
        marginLeft: 2,
        ...LatoRegular
    },
    gammaStyling:{
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    unselectRadiusBtn: {
        backgroundColor: white,
        borderWidth: 1,
        borderColor: primary
    }
})

export default styles