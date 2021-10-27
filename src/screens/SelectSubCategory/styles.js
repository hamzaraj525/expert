import { StyleSheet } from 'react-native'

//Themes
import { Metrics } from '../../theme'

//Constants
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    data: {
        marginTop: -40,
        width: screenWidth,
        paddingHorizontal: 10,
    },
    items: {
        marginBottom: 5
    }
})

export default styles