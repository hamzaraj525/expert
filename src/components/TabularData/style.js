import { StyleSheet } from 'react-native';

//Theme
import { Color, Metrics } from '../../theme';

//Constant
const { primary, secondary } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    headerWrapper: {
        width: '100%',
        flexDirection: 'row',
    },
    headerStyling: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderBottomColor: secondary,
        borderTopColor: secondary
    },
    icon: {
        color: primary,
        fontSize: screenWidth * 0.04,
        marginRight: 2
    },
    heading: {
        fontSize: screenWidth * 0.035,
        color: primary
    },
    dataWrapper: {
        width: '100%',
        flexDirection: 'row'
    },
    dataStyling: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    data: {
        fontSize: screenWidth * 0.03,
    }
})

export default styles