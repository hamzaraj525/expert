import { StyleSheet } from 'react-native';

//Theme
import { Color, Metrics } from '../../theme';

//Constant
const { primary, toastColor } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: toastColor
    },
    headingWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingStyling: {
        width: '65%',
        alignItems: 'flex-end'
    },
    heading: {
        fontSize: screenWidth * 0.035,
        textAlign: 'left'
    },
    description: {
        fontSize: screenWidth * 0.03,
        backgroundColor: primary,
        marginVertical: 12,
        paddingVertical: 10,
        borderRadius: 10,
        paddingHorizontal: 10
    }
})

export default styles