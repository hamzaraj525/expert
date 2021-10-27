import { StyleSheet, I18nManager } from 'react-native'

//Theme
import { Color, Metrics } from '../../theme'

//Constants
const { inputBg, secondary, primary, white } = Color
const { screenWidth, screenHeight } = Metrics
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    dropdownContainer: {
        width: '100%',
        height: 50,
        backgroundColor: inputBg,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: screenWidth * 0.042,
        color: secondary,
        marginLeft: 25
    },
    modalChild: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropdown: {
        width: '90%',
        borderWidth: 2,
        borderColor: secondary
    },
    dropdownHeader: {
        width: '100%',
        height: 60,
        backgroundColor: secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    headerText: {
        color: primary,
        fontSize: screenWidth * 0.05
    },
    crossContainer: {
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownBody: {
        width: '100%',
        maxHeight: screenHeight * 0.5,
    },
    scroller: {
        width: '100%',
        alignItems: 'center'
    },
    item: {
        width: '100%',
        height: 50,
        backgroundColor: white,
        borderBottomWidth: 0.5,
        borderBottomColor: secondary,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    crossIcon: {
        fontSize: screenWidth * 0.05,
        color: secondary
    },
    itemText: {
        fontSize: screenWidth * 0.042,
        color: secondary
    },
    dropdownIcon: {
        fontSize: screenWidth * 0.08,
        color: secondary,
        marginRight: 10
    }
})

export default styles