import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        paddingHorizontal : 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    removeEmptyGrid: {
        backgroundColor: 'transparent'
    }
})

export default styles