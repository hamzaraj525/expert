import React from 'react';
import { View, Share as MultiShare } from 'react-native'
import { connect } from 'react-redux'
import Share from 'react-native-share'

//Styling
import styles from './style';

//Utils
import { Helpers, Images } from '../../utils'

//Theme
import { Constants } from '../../theme'

//Icon
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Component
import { Header, SidebarItem, PrimaryHeading, ImageView, RadiusButton, Scrollbar } from '../../components';

//Constant
const { translateLang, socialLinking } = Helpers
const { share, whatsapp, twitter } = Images
const { url } = Constants

function AboutUs(props) {

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const socialnavigate = async (option) => {
        console.log("socialnavigate -> option", option)
        if (option) {
            const shareOption = {
                message: 'Hey there, \nI just discovered a cool service providing app to solve your problems.\nDo you want to check it out. Download Expert4u directly from the app/play store through the link below: ',
                social: option,
                url
            }
            await socialLinking(shareOption)
        }
        else {
            try {
                const shareOption = {
                    title: 'App link',
                    message: `'Hey there, \nI just discovered a cool service providing app to solve your problems.\nDo you want to check it out. Download Expert4u directly from the app/play store through the link below:\n ${url}`
                }
                await MultiShare.share(shareOption)
            } catch (error) {
                console.log("socialnavigate -> error", error)

            }
        }
    }

    return <View style={styles.container}>
        <Header title={changeLanguage('aboutUs')} cartIcon={false} isUser={false} bellIcon={false} />
        <Scrollbar>
            <ImageView styling={styles.img} />
            <PrimaryHeading heading={changeLanguage('aboutUsText')} styling={styles.textStyling} />
            <SidebarItem label='ExpertNearU' containerStyling={styles.sidebarItemStyling} disabled={true}
                iconComponent={<FontAwesome5 name='user' style={[styles.iconStyling, styles.userSize]} />} />
            <SidebarItem label='+92 304-4111427' containerStyling={styles.sidebarItemStyling} disabled={true}
                iconComponent={<Fontisto name='phone' style={[styles.iconStyling, styles.phoneSize]} />} />
            <SidebarItem label='expertnearu@gmail.com' containerStyling={styles.sidebarItemStyling} disabled={true}
                iconComponent={<MaterialCommunityIcons name='email' style={[styles.iconStyling, styles.emailSize]} />} />
            <View style={styles.bottomContainer}>
                <View style={styles.footerContentContainer}>
                    <RadiusButton styling={styles.radiusContainer} onPress={() => socialnavigate()} >
                        <ImageView containerStyling={styles.sharingIcons} styling={styles.sharingIcons} local={share} />
                    </RadiusButton>
                    <RadiusButton styling={styles.radiusContainer} onPress={() => socialnavigate(Share.Social.WHATSAPP)}>
                        <ImageView containerStyling={styles.sharingIcons} styling={styles.sharingIcons} local={whatsapp} />
                    </RadiusButton>
                    <RadiusButton styling={styles.radiusContainer} onPress={() => socialnavigate(Share.Social.TWITTER)}>
                        <ImageView containerStyling={styles.sharingIcons} styling={styles.sharingIcons} local={twitter} />
                    </RadiusButton>
                </View>
            </View>
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(AboutUs)