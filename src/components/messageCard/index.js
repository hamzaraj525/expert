import React from 'react'
import { View } from 'react-native';
import { connect } from 'react-redux'

//Component
import { ImageView, PrimaryHeading } from '../../components';

//Styling
import styles from './style';

//Utils
import { Images } from '../../utils';

//Theme
import { Color } from '../../theme';

//Constant
const { secondary } = Color
const { secondary_avatar } = Images

function MessageCard(props) {
    const {
        containerStyling = {},
        data = {},
        color = secondary
    } = props

    const {
        message = 'the quick brown fox jumps over the lazy dog.',
        image = secondary_avatar
    } = data


    return <View style={[styles.container, containerStyling]} >
        <ImageView local={image} containerStyling={styles.imageContainer} styling={styles.imageStyling} />
        <View style={[styles.msgContainer, { borderColor: color }]}>
            <PrimaryHeading
                heading={message}
                styling={[styles.message, { color: color }]} />
        </View>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(MessageCard)