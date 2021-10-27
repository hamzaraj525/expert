import { StyleSheet } from 'react-native'

//Themes
import { Metrics, Color } from '../../theme'

//Constant
const { screenWidth } = Metrics
const { secondary } = Color

export default styles = StyleSheet.create({
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        
    },
    icon: {
        fontSize: screenWidth * 0.08, 
        color : secondary
    },
    logoContainer: {
        width : '100%',
        height : '10%',
        marginTop: 10,
        justifyContent : 'center',
        alignItems : 'center'
    },
    logo: {
        width: screenWidth * 0.5
    },
    heading: {
        marginVertical: '6%'
    },
    input: {
        width:'85%',
        height:40
    }
})