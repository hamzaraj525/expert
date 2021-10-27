import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Components
import { Scrollbar, ImageView, Header, PrimaryHeading } from '../../components'

//Utils
import { Images, Helpers, Navigator } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { categoryPlaceholder, profile } = Images
const { concatBaseUrl } = Helpers
const { navigate } = Navigator

Wrapper = (props) => {
    const {
        renderSection = <View />,
        data = {},
        cartHandler = () => navigate('Cart')
    } = props

    const { image = profile, coverImg = categoryPlaceholder, title = 'Choose the type of service' } = data

    return (
        <View style={styles.container}>
            <Scrollbar>
                <ImageView
                    local={coverImg}
                    containerStyling={styles.imgContainer} styling={styles.img}
                />
                <View style={styles.overlay}>
                    <Header
                        cartHandler={cartHandler}
                        isBack={true}
                        isUser={false}
                        bellIcon={false} />
                    <ImageView
                        uri={image ? concatBaseUrl(image) : profile}
                        local={profile}
                        containerStyling={styles.avatarContainer}
                        styling={styles.avatar} />
                    <PrimaryHeading
                        styling={styles.heading}
                        heading={title} />
                </View>
                {renderSection()}
            </Scrollbar>
        </View>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(Wrapper)