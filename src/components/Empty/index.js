import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Style
import styles from './style'

//Component
import { PrimaryHeading } from '../../components'

//Utils
import { Helpers } from '../../utils'

//Constant
const { translateLang } = Helpers

function Empty(props){
    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const {
        containerStyling,
        textStyling,
        heading = changeLanguage('onFound')
    } = props

    return <View style={[styles.container, containerStyling]}>
        <PrimaryHeading heading={heading } styling={[styles.text, textStyling]}/>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(Empty)