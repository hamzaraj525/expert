import { StyleSheet } from 'react-native'

//Themes
import { Color, Fonts, Metrics } from '../../theme'

//Constants
const { primary, white, secondary } = Color
const { LatoMedium, LatoBold, LatoHeavy } = Fonts
const { screenHeight, screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    descriptionWrapper:{
        width: '95%',
        paddingHorizontal: 10
    },
    margin:{
        marginTop: 30
    },
    title:{
        alignItems: 'flex-start',
        color: primary,
        marginTop: 10,
        ...LatoHeavy
    },
    description : {
        fontSize: screenWidth * 0.03,
        marginBottom: 5
    },
    section: {
        borderWidth: 1.5,
        borderColor: secondary,
        marginTop: 20,
        paddingTop: 10,
        width: '95%',
    },
    icon: {
        width: screenWidth * 0.08,
        height: screenHeight * 0.04
    },
    label: {
        color: primary
    },
    sectionHeading: {
        marginLeft: 20
    },
    sectionContent: {
        marginLeft: 10
    },
    sectionItems: {
        paddingVertical: 10,
        marginVertical: 8
    },
    promoSection: {
        width: '95%',
        marginVertical: 10,
        borderWidth: 1.5,
        backgroundColor: secondary,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    promoSecondarySection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    promoHeading: {
        marginBottom: 10,
        color: white
    },
    inputContainer: {
        width: '72%',
        height: 40,
        backgroundColor: white
    },
    input: {
        width: '100%',
        height: 40
    },
    pricingButton: {
        backgroundColor: primary,
        width: '95%',
        paddingVertical: 10,
        borderRadius: 10
    },
    pricingButtonText: {
        color: white,
        ...LatoMedium,
        fontSize: screenWidth * 0.04
    },
    btnContainer: {
        width: '25%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: white,
    },
    btn: {
        width: '80%',
        paddingHorizontal: 0,
        height: '80%',
    },
    btnText: {
        ...LatoBold,
        fontSize: screenWidth * 0.025
    },
    loader:{
        right: 23
    }
})

export default styles