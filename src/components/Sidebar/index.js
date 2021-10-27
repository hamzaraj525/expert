import React from 'react'
import { View, I18nManager, Share as MultiShare } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Share from 'react-native-share'


//Components
import { ImageView, BgWrapper, SidebarItem, Scrollbar, PrimaryHeading, RadiusButton } from '../../components'

//Utils
import { Images, Helpers, Navigator } from '../../utils'

//Themes
import { Constants } from '../../theme'

//Actions
import * as AllActions from '../../redux/actions'

//Styles
import styles from './styles'

//Constants
const { share, whatsapp, twitter, transparent_logo } = Images
const { menu, url } = Constants
const { translateLang, socialLinking } = Helpers
const { navigateAndReset } = Navigator
const flag = I18nManager.isRTL

function Sidebar(props) {
    const { loginReducer: { user } } = props
    const { phone, type } = user

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const socialnavigate = async (option) => {
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
                await MultiShare.share({
                    title: 'App link',
                    message: `'Hey there, \nI just discovered a cool service providing app to solve your problems.\nDo you want to check it out. Download Expert4u directly from the app/play store through the link below:\n ${url}`
                })
            } catch (error) {
                console.log("socialnavigate -> error", error)

            }
        }
    }

    const logout = async () => {
        const { actions: { loginAction } } = props
        await loginAction({}, false)
    }

    return (
        <BgWrapper overlayStyling={styles.overlayContainer}>
            <View style={styles.imgContainer}>
                <ImageView styling={styles.img} local={transparent_logo} />
            </View>
            <SidebarItem
                label={changeLanguage('sideBarMain')} containerStyling={styles.sidebarHeader}>
                <RadiusButton styling={styles.langButton}>
                    <PrimaryHeading heading={flag ? 'اردو' : 'Eng'} styling={styles.langText} />
                </RadiusButton>
            </SidebarItem>
            <View style={styles.menu}>
                <Scrollbar scrollViewStyle={styles.listItem}>
                    {menu.map((val, ind) => {
                        if (type === 'customer') {
                            if (val.menuKey !== 'accountSetting2') {
                                return <SidebarItem onPress={val.label === 'SIGN OUT' ? logout : val.event} label={changeLanguage(val.menuKey)} key={ind} icon={val.icon}
                                    value={val.label === 'SIGN OUT' ? phone : ''} />
                            }
                        }
                        else {
                            if (val.menuKey !== 'faqText' && val.menuKey !== 'accountSetting' && val.menuKey !== 'customerCenter') {
                                return <SidebarItem onPress={val.label === 'SIGN OUT' ? logout : val.event} label={changeLanguage(val.menuKey)} key={ind} icon={val.icon}
                                    value={val.label === 'SIGN OUT' ? phone : ''} />
                            }
                        }
                    })}
                </Scrollbar>
            </View>
            <View style={styles.bottomContainer}>
                <PrimaryHeading heading='SHARE THE APP' styling={styles.footerHeading} />
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
        </BgWrapper>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    loginReducer: state.loginReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AllActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)