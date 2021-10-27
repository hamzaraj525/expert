import { StyleSheet } from 'react-native'

//Theme
import { Metrics, Color, Fonts } from '../../theme'

//Constants
const { screenWidth } = Metrics
const { primary, secondary, white, inputBg, toastColor } = Color
const { LatoMedium, LatoHeavy } = Fonts

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingContainer: {
        width: '95%',
        alignItems: 'flex-start',
        paddingVertical: 10,
    },
    heading: {
        fontSize: screenWidth * 0.06
    },
    primaryContainer: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: primary,
        borderRadius: 7,
        width: '35%',
        paddingVertical: 5
    },
    btnText: {
        color: secondary,
        fontSize: screenWidth * 0.04,
        fontWeight: 'bold'
    },
    time: {
        fontSize: screenWidth * 0.03,
        marginLeft: '4%',
        color: primary
    },
    secondaryContainer: {
        width: '95%',
        backgroundColor: white,
        marginTop: 30,
        elevation: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    innerHeading: {
        width: '90%',
        paddingVertical: 10,
        borderBottomColor: inputBg,
        borderBottomWidth: 1
    },
    secondaryTitle: {
        fontSize: screenWidth * 0.045,
        ...LatoMedium,
        color: primary
    },
    labelStyling: {
        color: secondary,
        fontSize: screenWidth * 0.04,
        ...LatoHeavy
    },
    descriptionStyling: {
        fontSize: screenWidth * 0.03,
        marginLeft: 5,
        color: toastColor
    },
    imgPlaceholder: {
        width: 30,
        height: 30
    },
    imgs: {
        width: '100%',
        height: '100%'
    },
    descriptionContainer: {
        marginTop: 20,
        width: '95%',
        backgroundColor: white,
        elevation: 5,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    initial: {
        fontSize: screenWidth * 0.045,
        ...LatoMedium,
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
    label: {
        fontSize: screenWidth * 0.035
    },
    value: {
        fontSize: screenWidth * 0.035,
        ...LatoHeavy
    },
    nestedDataContainer: {
        alignItems: 'flex-end',
        paddingVertical: 10,
        borderTopWidth: 0.05,
        borderTopColor: secondary
    },
    stopStyling: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    stop: {
        fontSize: screenWidth * 0.04,
        marginLeft: 3,
        color: primary
    },
})

export default styles