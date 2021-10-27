import { StyleSheet } from 'react-native'
import { hasNotch } from '../../utils/helpers'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chatHeader: {
        height: 70,
        paddingTop:hasNotch ? 30 : 0,

    },
    inputContainer: {
        width: '100%', 
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default styles