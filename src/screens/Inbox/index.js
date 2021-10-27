import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Icons
import Entypo from 'react-native-vector-icons/Entypo'

//Styling
import styles from './style'

//Utils
import { Helpers, Images, Navigator } from '../../utils'

//Themes
import { Constants } from '../../theme'

//Component
import { Header, Scrollbar, InboxFilters, SubCategoryItem } from '../../components'

//Constant
const { translateLang } = Helpers
const { messages } = Constants
const { secondary_avatar } = Images
const { navigate } = Navigator

function Inbox(props) {

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return <View style={styles.container}>
        <Header title={changeLanguage('inbox')} isUser={false}/>
        <InboxFilters containerStyling={styles.makeMargin} />
        <Scrollbar>
            {messages.map((val, ind) => {
                return <SubCategoryItem
                    key={ind}
                    onPress={() => navigate('Chat')}
                    icon={<Entypo name="chevron-small-left" style={styles.chevIcon} />}
                    imageStylingContainer={styles.imgContainer}
                    containerStyling={styles.inboxCard} data={{ image: secondary_avatar, title: 'New Message', detail: 'How are you bro?' }} />
            })}
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(Inbox)