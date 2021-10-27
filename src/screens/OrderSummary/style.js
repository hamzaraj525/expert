import { StyleSheet } from 'react-native'

//Theme
import { Color, Fonts, Metrics } from '../../theme'

//Constant
const { LatoHeavy } = Fonts
const { primary, secondary, white, inputBg } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollStyling: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    headingStyling: {
        fontSize: screenWidth * 0.06,
        marginBottom: 20
    },
    heading: {
        paddingVertical: 10,
        color: primary
    },
    cardContainer: {
        width: '100%',
        elevation: 5,
        paddingHorizontal: 10,
        backgroundColor: white,
        marginBottom: 15
    },
    paymentStyling: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: inputBg,
        borderBottomColor: inputBg
    },
    sidebarStyling: {
        paddingVertical: 5,
        width: '90%'
    },
    iconStyling: {
        width: 25,
        height: 25,
        backgroundColor: 'green'
    },
    icon: {
        fontSize: screenWidth * 0.05,
        color: white
    },
    summaryCardStyling: {
        width: '100%',
        elevation: 5,
        backgroundColor: white,
        marginBottom: 15,
        paddingHorizontal: 10
    },
    cashIcon: {
        color: primary,
        fontSize: screenWidth * 0.08
    },
    creditIcon: {
        color: primary,
        fontSize: screenWidth * 0.07,
        marginLeft: '1%'
    },
    toolIcon: {
        color: primary,
        fontSize: screenWidth * 0.07,
    },
    removePadding: {
        paddingHorizontal: 0,
    },
    servicesStyling: {
        borderTopColor: inputBg,
        borderTopWidth: 1
    },
    serviceText: {
        ...LatoHeavy
    },
    descriptionContainer: {
        width: '100%',
        backgroundColor: white,
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    initial: {
        color: primary,
        paddingVertical: 10,
        borderBottomColor: inputBg,
        borderBottomWidth: 1
    },
    installation: {
        paddingVertical: 15,
        ...LatoHeavy
    },
    units: {
        marginBottom: 20,
        fontSize: screenWidth * 0.04
    },
    dataContaier: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    nestedDataContainer: {
        alignItems: 'flex-end',
        // paddingVertical: 10,
        borderTopWidth: 0.05,
        borderTopColor: secondary
    },
    label: {
        fontSize: screenWidth * 0.035
    },
    value: {
        fontSize: screenWidth * 0.035,
        ...LatoHeavy
    },
    stopStyling: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    stop: {
        fontSize: screenWidth * 0.04,
        marginLeft: 3
    },
    submitButtonStyling: {
        width: '100%',
        paddingVertical: 10,
        backgroundColor: primary,
        borderRadius: 5,
        marginTop: 10
    },
    submitButtonText: {
        color: white
    },
    extraDetails: {
        color: primary,
        fontSize: screenWidth * 0.035
    },
    off: {
        color: 'green',
        fontSize: screenWidth * 0.035,
        textDecorationLine: 'line-through'
    },
    unselected: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 100
    }
})

export default styles