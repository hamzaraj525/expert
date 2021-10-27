import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import * as AllActions from '../../redux/actions'

//Components
import { Scrollbar, PrimaryButton, ImageView, Header, Input, Dropdown, ImagePickers, Spinner } from '../../components'

//Theme
import { Color } from '../../theme'

//Utils
import { Helpers, Images } from '../../utils'

//Styling
import styles from './style'

//Constant
const { translateLang, setFormdata, concatBaseUrl, warningToast } = Helpers
const { secondary } = Color
const { categoryPlaceholder } = Images

function AccountSetting(props) {
    const { loginReducer: { isImageLoading, isUpdateProfileLoading, user:
        { first_name, last_name, phone, email, country, city, town, address, image, id } } } = props

    const [firstName, handleFirstName] = useState(first_name)
    const [lastName, handleLastName] = useState(last_name || '')
    const [isPhone, handlePhone] = useState(phone || '')
    const [isEmail, handleEmail] = useState(email || '')
    const [isCountry, handleCountry] = useState(country)
    const [isCity, handleCity] = useState(city)
    const [isTown, handleTown] = useState(town)
    const [isAddress, handleAddress] = useState(address)
    const [profile, handleProfile] = useState(concatBaseUrl(image))

    const cities = ['Karachi', 'Lahore', 'Peshawer', 'Islamabad',]

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const checkImage = (img) => {
        handleProfile(img)
        uploadImage(img)
    }

    const validateToast = error => {
        warningToast('Warning!', error)
    }

    const uploadImage = async (img) => {
        const { actions: { imageUploadAction } } = props

        const payload = {
            image: {
                uri: img,
                type: "image/jpg",
                name: `user-${new Date().getTime()}.jpg`
            },
            id
        }

        const formData = setFormdata(payload)

        await imageUploadAction(formData)
    }

    const updateProfile = async (id) => {
        const { actions: { updateProfileAction } } = props

        try {
            if (!firstName) return validateToast('Enter First Name!')
            if (!lastName) return validateToast('Enter Last Name!')
            if (!isEmail) return validateToast('Enter your Email!')
            if (!isCountry) return validateToast('Enter Country!')
            if (!isCity) return validateToast('Enter City!')
            if (!isTown) return validateToast('Enter Town!')
            if (!isAddress) return validateToast('Enter Address!')

            const payload = {
                first_name: firstName,
                last_name: lastName,
                email: isEmail,
                country: isCountry,
                city: isCity,
                town: isTown,
                address: isAddress,
                id
            }

            const formData = setFormdata(payload)
            await updateProfileAction(formData)
        } catch (error) {
            console.log("updateProfile -> error", error)
        }

    }

    return <View style={styles.container} >
        <Header
            isUser={false}
            title={changeLanguage('accountSetting')}
            cartIcon={false}
            bellIcon={false}
        />
        <Scrollbar scrollViewStyle={styles.scrollView}>
            <View style={styles.imageContainer} >
                {isImageLoading ? <Spinner imageShown={false} /> :
                    <View>
                        <ImageView uri={profile} local={categoryPlaceholder} containerStyling={styles.bannerContainer} styling={styles.banner} />
                        <ImagePickers containerStyling={styles.buttonContainer} handler={(img) => checkImage(img)} />
                    </View>}
            </View>
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={firstName}
                onChangeText={text => handleFirstName(text)}
                placeholder={changeLanguage('firstName')} />
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={lastName}
                onChangeText={text => handleLastName(text)}
                placeholder={changeLanguage('lastName')} />
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={isPhone}
                onChangeText={text => handlePhone(text)}
                editable={false}
                placeholder={changeLanguage('phoneNumberText')}
                keyboardType='numeric' />
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={isEmail}
                onChangeText={text => handleEmail(text)}
                placeholder={changeLanguage('emailAddressText')} />
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={isTown}
                onChangeText={text => handleTown(text)}
                placeholder={changeLanguage('townText')} />
            <Input
                containerStyling={styles.input}
                inputStyling={styles.inputText}
                value={isAddress}
                onChangeText={text => handleAddress(text)}
                placeholder={changeLanguage('address')} />
            <Dropdown
                placeholder={changeLanguage('countryText')}
                labelStyling={styles.dropdownLabel}
                value={isCountry}
                handler={text => handleCountry(text)}
                styling={styles.dropdown} />
            <Dropdown
                placeholder={changeLanguage('cityText')}
                labelStyling={styles.dropdownLabel}
                value={isCity}
                handler={text => handleCity(text)}
                styling={styles.dropdown}
                data={cities} />
            <PrimaryButton
                label={changeLanguage('save')}
                rippleContainerBorderRadius={0}
                rippleColor={secondary}
                styling={styles.button}
                textStyling={styles.buttonText}
                loading={isUpdateProfileLoading}
                disabled={isUpdateProfileLoading}
                onPress={() => updateProfile(id)}
                loaderColor={secondary} />
        </Scrollbar>
    </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting)