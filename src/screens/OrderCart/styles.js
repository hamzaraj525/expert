import { StyleSheet } from 'react-native'

//Themes
import { Color, Metrics } from '../../theme'

//Constants
const { primary, white, secondary, } = Color
const { screenWidth } = Metrics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    cartSection: {
        marginTop: 25
    },
    cartItem: {
        marginBottom: 15
    },
    estimatedContainer: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    total: {
        fontSize: screenWidth * 0.03
    },
    value: {
        color: secondary,
        fontSize: screenWidth * 0.03
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainerPrimary: {
        backgroundColor: primary,
        borderRadius: 0,
        paddingHorizontal: 0,
        paddingVertical: 10,
        width: '100%'
    },
    buttonContainerSecondary: {
        backgroundColor: secondary,
        borderColor: secondary,
        paddingHorizontal: 0,
        borderRadius: 0,
        width: '50%'
    },
    button: {
        color: white
    },
    headingContainer:{
        alignItems: 'flex-start'
    }
})

export default styles