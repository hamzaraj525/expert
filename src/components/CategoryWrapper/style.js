import { StyleSheet } from 'react-native'

//Theme
import { Metrics } from '../../theme'

//Constats
const { screenWidth } = Metrics

export default styles = StyleSheet.create({
    titleHeader: {
        marginTop: 5,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        width: '100%',
    },
    header: {
        marginBottom: 10
    },
    makeSpace: {
        marginHorizontal: screenWidth * 0.017
    }
})