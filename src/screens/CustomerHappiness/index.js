import React, { useState } from 'react'
import { View, I18nManager } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Styling
import styles from './style'

//Actions
import * as AllActions from '../../redux/actions'

//Component
import { Header, PrimaryButton, ImageView, Input, Dropdown, Scrollbar } from '../../components'

//Utils
import { Helpers, Images } from '../../utils'

//Theme
import { Color } from '../../theme'

//Constant
const { translateLang, setFormdata, validatePhone, validateEmail, warningToast, concatBaseUrl } = Helpers
const { secondary } = Color
const { categoryPlaceholder } = Images

const flag = I18nManager.isRTL
const reasons = ['Not answered my request', 'Profile not able to update', 'Cant be able to book a service']

function CustomerHappiness(props) {
    const { loginUser: { user: { first_name, last_name, phone, email, image } }, 
            customerHappinessCenterReducer: { isLoading }
        } = props
    
    const [isName, handleName] = useState(`${first_name} ${last_name}`)
    const [isPhone, handlePhone] = useState(phone)
    const [isEmail, handleEmail] = useState(email)
    const [isMessage, handleMessage] = useState('')
    const [isAbout, handleAbout] = useState('')
    const [profile, handleProfile] = useState(image ? concatBaseUrl(image) : '')


    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const validateToast = error => {
        warningToast('Warning!', error)
    }

    const handleQueries = async () => {
        const { actions : { customerHappinessCenterAction } } = props
     
        if(!isName) return validateToast('Enter Your Name!')
        if(!isPhone) return validateToast('Enter Your Phone Number!')
        if(!validatePhone(phone)) return validateToast('Invalid phone number!')
        if(!isEmail) return validateToast('Enter Your Email!')
        if(!validateEmail(isEmail)) return validateToast('Enter correct email type!')
        if(!isAbout) return validateToast('Select a Reason!')
        if(!isMessage) return validateToast('Message must not be empty!')
        
        const payload = {
            name: isName,
            phone: isPhone,
            email: isEmail,
            message: isMessage,
            season: isAbout
        }
        
        const formData = setFormdata(payload)
        await customerHappinessCenterAction(formData)
        flushState()
    }

    const flushState = () => {
        handleAbout('')
        handleMessage('')
    }

    return <View style={styles.container} >
        <Header
            isUser={false}
            title={changeLanguage('customerCenter')}
            cartIcon={false}
            bellIcon={false}
        />
        <Scrollbar scrollViewStyle={styles.scrollView}>
            <ImageView uri={profile} local={categoryPlaceholder} containerStyling={styles.bannerContainer} styling={styles.banner} />
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={isName}
                onChangeText={text => handleName(text)}
                placeholder={changeLanguage('fullNameText')} />
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={isPhone}
                onChangeText={text => handlePhone(text)}
                placeholder={changeLanguage('phoneNumberText')}
                keyboardType='numeric' />
            <Dropdown
                placeholder={changeLanguage('accountSettingDropDown')}
                labelStyling={styles.dropdownLabel}
                value={isAbout}
                onChangeText={text => handleAbout(text)}
                handler={(e) => handleAbout(e) }
                styling={styles.dropdown} 
                data={reasons}/>
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={isEmail}
                onChangeText={text => handleEmail(text)}
                placeholder={changeLanguage('emailAddressText')} />
            <Input
                containerStyling={styles.messageInput}
                inputStyling={styles.inputText}
                value={isMessage}
                multiline={true}
                onChangeText={text => handleMessage(text)}
                placeholder={changeLanguage('message')} />
            <PrimaryButton
                label={changeLanguage('send')}
                rippleContainerBorderRadius={0}
                rippleColor={secondary}
                styling={styles.button}
                textStyling={styles.buttonText} 
                loading={isLoading}
                disabled={isLoading}
                loaderColor={secondary}
                onPress={handleQueries}/>
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    customerHappinessCenterReducer: state.customerHappinessCenterReducer,
    loginUser: state.loginReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AllActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerHappiness)
