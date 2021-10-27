import React, { useState } from 'react'
import { View, Switch } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import * as AllActions from '../../redux/actions'

//Style
import styles from './style'

//Utils
import { Helpers, Images, Navigator } from '../../utils'

//Theme
import { Color } from '../../theme'

//Icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

//component
import { Header, Scrollbar, ImageView, RadiusButton, PrimaryHeading, SidebarItem } from '../../components'

//Constant
const { translateLang, concatBaseUrl, setFormdata } = Helpers
const { profile, transparent_logo } = Images
const { primary, white } = Color
const { navigate } = Navigator

function ViewProfile(props) {
    const { loginReducer: { isDisable, isStatus, user: { id, city, email, first_name, last_name, town, phone, image, type, address, bio, experience, n_id, country, driving_licence } } } = props

    console.log("ViewProfile -> image", image)
    const [isSwitch, handleSwitch] = useState(isStatus ? true : false)

    const availiblity = async () => {
        const { actions: { statusAction } } = props
        toggleSwitch(!isSwitch)

        const payload = {
            expert_id: id,
            availability: isSwitch ? 0 : 1
        }

        const formData = setFormdata(payload)
        await statusAction(formData)
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const toggleSwitch = () => {
        handleSwitch(!isSwitch)
    }

    return <View style={styles.container} >
        <Header
            isUser={false}
            cartIcon={false}
            isBack={true}
            title={changeLanguage('profile')}
        />
        <Scrollbar scrollViewStyle={styles.scrollView}>
            <View style={styles.imageContainer} >
                <ImageView containerStyling={{width: '100%', alignItems: 'center',justifyContent: 'center', height: '100%'}} local={transparent_logo}/>
                <RadiusButton styling={styles.btnWrapper} rippleColor={primary} onPress={() => type === 'customer' ? navigate('AccountSetting') : navigate('PersonalInfo')} >
                    <MaterialIcons name='edit' style={styles.plusIcon} />
                </RadiusButton>
            </View>
            <View style={styles.profileStyling} >
                <View style={styles.profileWrapper} >
                    <ImageView uri={concatBaseUrl(image)} local={profile} containerStyling={styles.profileContainer} styling={styles.profile} />
                    <PrimaryHeading heading={`${first_name || ''} ${last_name || ''}`} styling={styles.title} />
                    <PrimaryHeading heading={type} styling={styles.discription} />
                </View>
                <View style={styles.secondaryWrapper} >
                    <SidebarItem iconComponent={<Entypo name='email' style={styles.icon} />} disabled={true} label={email || 'N/A'}
                        containerStyling={[styles.wrapper, styles.wapperStyling]} labelStyling={[styles.text, styles.name]} />
                    <SidebarItem iconComponent={<FontAwesome name='phone' style={styles.icon} />} disabled={true} label={phone || 'N/A'}
                        containerStyling={styles.wrapper} labelStyling={[styles.text, styles.phone]} />
                </View>
            </View>
            {type === 'expert' && <View style={styles.switchContainer}>
                <PrimaryHeading styling={styles.listTitle} heading='Availiblity'/>
                <Switch disabled={isDisable} value={isSwitch} onValueChange={availiblity} thumbColor={isSwitch ? primary : white}  />
            </View> }
            {type === 'expert' && <View style={styles.list}>
                <PrimaryHeading styling={styles.listTitle} heading='Bio'/>
                <PrimaryHeading styling={styles.listDesc} heading={bio || 'N/A'}/>
            </View>}
            {type === 'expert' && <View style={styles.list}>
                <PrimaryHeading styling={styles.listTitle} heading='NIC'/>
                <PrimaryHeading styling={styles.listDesc} heading={n_id || 'N/A'}/>
            </View>}
            {type === 'expert' && <View style={styles.list}>
                <PrimaryHeading styling={styles.listTitle} heading='Experience'/>
                <PrimaryHeading styling={styles.listDesc} heading={experience || 'N/A'}/>
            </View>}
            <View style={styles.list}>
                <PrimaryHeading styling={styles.listTitle} heading='Country'/>
                <PrimaryHeading styling={styles.listDesc} heading={country || 'N/A'}/>
            </View>
            <View style={styles.list}>
                <PrimaryHeading styling={styles.listTitle} heading='City'/>
                <PrimaryHeading styling={styles.listDesc} heading={city || 'N/A'}/>
            </View>
            <View style={styles.list}>
                <PrimaryHeading styling={styles.listTitle} heading='Town'/>
                <PrimaryHeading styling={styles.listDesc} heading={town || 'N/A'}/>
            </View>
            <View style={styles.list}>
                <PrimaryHeading styling={styles.listTitle} heading='Address'/>
                <PrimaryHeading styling={styles.listDesc} heading={address || 'N/A'}/>
            </View>
        </Scrollbar>
    </View>
}
const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    loginReducer: state.loginReducer
})

const mapDispatchToProps = dispatch => {
    return { actions: bindActionCreators(AllActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)