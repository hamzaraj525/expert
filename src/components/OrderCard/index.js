import React from 'react'
import { View } from 'react-native';
import { connect } from 'react-redux'

//Component
import { ImageView, PrimaryButton, PrimaryHeading } from '../../components';

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Styling
import styles from './style';

//Utils
import { Images, Helpers } from '../../utils';

//Theme
import { Color } from '../../theme';

//Constant
const { secondary } = Color
const { company_profile } = Images
const { translateLang, concatBaseUrl } = Helpers

function OrderCard(props) {
    const {
        containerStyling = {},
        data = {},
        onPress = () => { },
        loading = false
    } = props

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const {
        first_name,
        last_name,
        bookingdate,
        bookingtime,
        image
    } = data


    return <View style={[styles.container, containerStyling]} >
        <View style={styles.detailStyling}>
            <ImageView uri={concatBaseUrl(image)} containerStyling={styles.imageContainer} styling={styles.imageStyling} />
            <View style={styles.descriptionContainer}>
                <PrimaryHeading heading={`${first_name} ${last_name}`} styling={styles.titleStyling} />
                <PrimaryHeading heading={`${changeLanguage('expectedTime')} ${bookingdate}`} styling={styles.descriptionStyling} />
                <PrimaryHeading heading={`${changeLanguage('from')} ${bookingtime}`} styling={styles.timeStyling} />
            </View>
        </View>
        <View style={styles.buttonWrapper} >
            <PrimaryButton loading={loading} disabled={loading} styling={styles.buttonStyling} onPress={onPress} loaderColor={secondary} rippleColor={secondary} >
                <MaterialCommunityIcons name='delete' style={styles.icon} />
                <PrimaryHeading heading={changeLanguage('cancel')} styling={styles.text} />
            </PrimaryButton>

        </View>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(OrderCard)