import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Styling
import styles from './style'

//Utils
import { Helpers } from '../../utils'

//Themes
import { Color, Constants } from '../../theme'

//Component
import { SectionsHeader, Scrollbar, MessageCard, SecondaryInput } from '../../components'

//Constant
const { translateLang } = Helpers
const { primary, secondary } = Color
const { messages } = Constants

function Chat(props) {

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return <View style={styles.container}>
        <SectionsHeader isCard={false} primaryText={changeLanguage('chat')} primaryContainer={styles.chatHeader} />

        <Scrollbar>
            {messages.map((val, ind) => {
                return <MessageCard key={ind} data={val} color={ind % 2 === 0 ? primary : secondary} containerStyling={{ flexDirection: ind % 2 === 0 ? 'row' : 'row-reverse' }} />
            })}
        </Scrollbar>
        <View style={styles.inputContainer}>
            <SecondaryInput 
            isSearch={false} 
            isFilter={false}
            isSend={true}
            placeholder={changeLanguage('sendText')} />
        </View>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(Chat)