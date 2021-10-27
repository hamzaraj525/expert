import { StyleSheet } from 'react-native'

//utils
import { Color, Metrics, Fonts } from '../../theme'

//Constant
const { white, secondary, primary, inputBg } = Color
const { screenWidth } = Metrics
const { LatoHeavy, LatoMedium } = Fonts

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        alignItems: 'center',
    },
    imageContainer:{
        width: '100%',
        height: 200,
        alignItems: 'flex-end',
        backgroundColor: secondary,
    },
    bannerContainer:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    banner:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    btnWrapper:{
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: secondary
    },
    plusIcon:{
        fontSize: screenWidth * 0.06,
        color: white 
    },
    profileStyling:{
        width: '100%',
        marginBottom: 20
    },
    profileWrapper:{
        alignItems: 'center',
        position: 'absolute',
        top: -65,
        left: 20,
    },
    profileContainer:{
        width: 120,
        height: 120,
    },
    profile:{
        width : '100%',
        height : '100%',
        resizeMode : 'cover'
    },
    secondaryWrapper:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    wrapper:{
        width: '55%',
        height: 65,
        marginRight: 10,
    },
    wapperStyling: {
        paddingBottom: 1,
        borderBottomColor: inputBg,
        borderBottomWidth: 1,
        marginTop: 10,
        paddingBottom: 15,
        paddingRight: 15
    },
    title:{
        marginTop: 10,
        fontSize: screenWidth * 0.04,
        ...LatoHeavy,
    },
    discription: {
        fontSize: screenWidth * 0.04,
        ...LatoMedium,
        marginTop: -5
    },
    switchWrapper:{
        width: '100%',
        paddingLeft: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    switchContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%', 
        paddingHorizontal: 15, 
        paddingVertical: 20
    },
    list: {
        backgroundColor: inputBg, 
        width: '94%',
        alignSelf:'center',
        paddingVertical: 15,
        paddingHorizontal: 12,
        marginVertical: 5,
        borderRadius:10
    },
    listTitle: {
        color: secondary,
        fontSize: screenWidth * 0.05,
    },
    listDesc: {
        color: primary,
        fontSize: screenWidth * 0.035
    },
    switchStyling:{
        paddingVertical: 10,
        marginRight: 10
    },
    detailWrapper:{
        width: '95%',
        height: 60,
        paddingVertical: 15,
        marginBottom: 10,
        backgroundColor: inputBg
    },
    icon:{
        fontSize: screenWidth * 0.06,
        color: secondary,
        ...LatoHeavy,
    },
    text:{
        fontSize: screenWidth * 0.037,
        color: secondary,
    },
    phone:{
        marginLeft: 13
    },
    location:{
        marginLeft: 15
    },
    card:{
        marginLeft: 8
    }
})

export default styles