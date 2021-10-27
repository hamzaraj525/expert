import { StyleSheet, I18nManager } from 'react-native';

//Theme
import { Metrics, Fonts, Color } from '../../theme';

//Constant
const { screenWidth } = Metrics
const { LatoMedium } = Fonts
const { secondary, white, primary } = Color
const flag = I18nManager.isRTL

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    inboxContainer: {
        width: 100,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    filterContainer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    inboxText: {
        fontSize: screenWidth * 0.05
    },
    chevIcon: {
        fontSize: screenWidth * 0.08,
        color: secondary
    }, 
    filterImgCont: {
        width: '100%',
        height: '100%'
    },
    inboxDropdown: {
        width: 120,
        height: 180,
        position: 'absolute',
        top: 10,
        left: 9,
        zIndex : 1000
    },
    featDropdown: {
        width: 120,
        height: 180,
        position: 'absolute',
        top: 10,
        right: 9,
        zIndex : 1000
    },
    item: {
        width: '100%',
        height: 45,
        borderBottomWidth: 0.5,
        borderBottomColor: secondary,
        borderRightWidth: 0.5,
        borderRightColor: secondary,
        backgroundColor: white,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    itemsSecondary: {
        width: '100%',
        height: 45,
        borderBottomWidth: 0.5,
        borderBottomColor: secondary,
        borderLeftWidth: 0.5,
        borderLeftColor: secondary,
        backgroundColor: white,
        justifyContent: 'center',
        paddingHorizontal : 10
    },
    secondaryText: {
        color: primary
    }
})

export default styles