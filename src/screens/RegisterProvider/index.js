import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { WebView } from 'react-native-webview';

//Components
import { Header } from '../../components'

//Utils
import { Helpers } from '../../utils'

//Theme
import { Constants } from '../../theme'

//Styling
import styles from './styles'

//Constants
const { translateLang } = Helpers
const { url } = Constants

function RegisterProvider(props) {

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return (
        <View style={styles.container}>
            <Header isBack={true} isUser={false} cartIcon={false} bellIcon={false} title={changeLanguage('registerAsProvider')} />
            <WebView
                source={{
                    uri: url
                }}
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(RegisterProvider)