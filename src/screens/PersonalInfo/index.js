import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import * as AllActions from '../../redux/actions'

//Styling
import styles from './styles'

//Components
import { Scrollbar, ImageView, PrimaryHeading, Input, Dropdown, FileInput, PrimaryButton, ImagePickers, Header } from '../../components'

//Theme
import { Color } from '../../theme'

//Utils
import { Navigator, Helpers } from '../../utils'

//Constant
const { secondary } = Color
const { navigate } = Navigator
const { setFormdata, translateLang, concatBaseUrl, warningToast, validateCnic, validateEmail } = Helpers

function PersonalInfo(props) {
    const { loginReducer: { user, isUpdateExpertProfileLoading } } = props
    const { city, country, email, address, first_name, n_id, image, last_name, phone, town, bio, experience, id, license } = user

    const [firstName, handleFirstName] = useState(first_name)
    const [lastName, handleLastName] = useState(last_name)
    const [isPhone, handlePhone] = useState(phone)
    const [isEmail, handleEmail] = useState(email)
    const [isAddress, handleAddress] = useState(address)
    const [isCountry, handleCountry] = useState(country)
    const [isCity, handleCity] = useState(city)
    const [isTown, handleTown] = useState(town)
    const [isNId, handleNId] = useState(n_id)
    const [isExperience, handleExperience] = useState(experience)
    const [isBio, handleBio] = useState(bio)
    const [idImage, setIdImage] = useState(concatBaseUrl(license))
    const [profile, setProfile] = useState(concatBaseUrl(image))
    // const [education, handleEducation] = useState('')
    // const [speciality, handleSpeciality] = useState('')
    // const [description, handleDescription] = useState('')

    const handlePersonalInfo = async () => {
        const { actions: { updateExpertProfileAction } } = props

        try {
            if (!firstName) return validateToast('Enter first name!')
            if (!lastName) return validateToast('Enter last name!')
            if (!isEmail) return validateToast('Enter your email!')
            if (!isAddress) return validateToast('Enter your Address!')
            if (!validateEmail(isEmail)) return validateToast('Enter correct email address!')
            if (!isCountry) return validateToast('Select your country!')
            if (!isCity) return validateToast('Select your city!')
            if (!isTown) return validateToast('Select your town!')
            if (!isNId) return validateToast("Enter your NIC no! eg: '40000-1234567-1'")
            if (!validateCnic(isNId)) return validateToast("Enter correct NIC! May be you missing '-' ")
            if (!isExperience) return validateToast('Select experience!')
            if (!isBio) return validateToast('Enter your bio details!')
            if (!idImage) return validateToast('Upload your NIC image!')
            if (!profile) return validateToast('Upload your profile image!')

            const payload = {
                first_name: firstName,
                last_name: lastName,
                bio: isBio,
                experience: isExperience,
                email: isEmail,
                address: isAddress,
                city: isCity,
                town: isTown,
                country: isCountry,
                n_id: isNId,
                expert_id: id,
            }

            const expertMediaURL = 'public/storage/images/serviceprovider/'

            if (!profile.includes(expertMediaURL)) {
                payload.image = {
                    uri: profile,
                    type: "image/jpg",
                    name: `user-${new Date().getTime()}.jpg`
                }
            }

            if (!idImage.includes(expertMediaURL)) {
                payload.driving_licence = {
                    uri: idImage,
                    type: "image/jpg",
                    name: `user-${new Date().getTime()}.jpg`
                }
            }

            const formData = setFormdata(payload)
            await updateExpertProfileAction(formData)
        } catch (error) {
            console.log("handlePersonalInfo -> error", error)
        }
    }

    const validateToast = error => {
        warningToast('Warning!', error)
    }

    const renderLabels = (label) => {
        return <View style={styles.labelContainer}>
            <PrimaryHeading heading={label} styling={styles.label} />
        </View>
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const years = ['1 Year', '2 Years', '3 Years', '4 Years', '+5 Years']
    const countries = ['Pakistan']
    const cities = ['Karachi', 'Lahore', 'Hyderabad', 'Sukkur', 'Islamabad', 'Rawalpindi', 'Multan']
    const towns = ['Town A', 'Town B', 'Town C', 'Town D']

    return <View style={styles.container}>
        <Header isBack={true} title={changeLanguage('accountSetting')} bellIcon={false} isUser={false} />
        <Scrollbar>
            <View style={styles.imageContainer} >
                <ImageView uri={profile} styling={styles.img} containerStyling={styles.bannerContainer} />
                <ImagePickers containerStyling={styles.pickerContainerStyling} handler={url => setProfile(url)} />
            </View>
            {renderLabels(changeLanguage('personalInfoText'))}
            <View style={styles.inputsContainer}>
                <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('firstName')} value={firstName}
                    inputStyling={styles.inputs}
                    onChangeText={text => handleFirstName(text)} />
                <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('lastName')} value={lastName}
                    inputStyling={styles.inputs}
                    onChangeText={text => handleLastName(text)} />
                <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('phoneNumberText')}
                    keyboardType='numeric' value={isPhone}
                    inputStyling={styles.inputs}
                    editable={false}
                    onChangeText={text => handlePhone(text)} />
                <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('emailAddressText')}
                    value={isEmail}
                    inputStyling={styles.inputs}
                    onChangeText={text => handleEmail(text)} />
                <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('address')}
                    value={isAddress}
                    inputStyling={styles.inputs}
                    onChangeText={text => handleAddress(text)} />
                <Dropdown value={isCountry} data={countries} placeholder={changeLanguage('countryText')} labelStyling={styles.labelStyling}
                    styling={styles.inputsWrapper} handler={text => handleCountry(text)} />
                <Dropdown value={isCity} data={cities} placeholder={changeLanguage('cityText')} labelStyling={styles.labelStyling}
                    styling={styles.inputsWrapper} handler={text => handleCity(text)} />
                <Dropdown value={isTown} data={towns} placeholder={changeLanguage('townText')} labelStyling={styles.labelStyling}
                    styling={styles.inputsWrapper} handler={text => handleTown(text)} />
                {/* <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('govIdNumber')}
                    value={govId}
                    keyboardType='numeric'
                    inputStyling={styles.inputs}
                    onChangeText={text => handleGovId(text)} /> */}
            </View>

            {renderLabels(changeLanguage('govIdText'))}
            <View style={styles.inputsContainer}>
                <FileInput value={idImage} styling={styles.makeMarginBottom} placeholder={changeLanguage('uploadGovIdText')} labelStyling={styles.labelStyling} handler={(url) => setIdImage(url)} />
            </View>

            {renderLabels(changeLanguage('idCardNumberText'))}
            <View style={styles.inputsContainer}>
                <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('idCardNumberText')}
                    keyboardType='numeric' value={isNId}
                    inputStyling={styles.inputs}
                    onChangeText={text => handleNId(text)} />
            </View>

            {/* {renderLabels(changeLanguage('qualificationInfoText'))} */}
            <View style={styles.inputsContainer}>
                {/* <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('educationText')}
                    inputStyling={styles.inputs} value={education}
                    onChangeText={text => handleEducation(text)} />
                <Input containerStyling={styles.inputsWrapper}
                    placeholder={changeLanguage('specialityText')} value={speciality}
                    inputStyling={styles.inputs}
                    onChangeText={text => handleSpeciality(text)} /> */}
                <Dropdown value={isExperience} placeholder={changeLanguage('experienceText')} data={years} labelStyling={styles.labelStyling}
                    styling={styles.inputsWrapper} handler={text => handleExperience(text)} />
                <Input value={isBio} containerStyling={styles.descriptionContainer} multiline={true}
                    placeholder={changeLanguage('bereifYourselfText')}
                    inputStyling={styles.descriptionInput}
                    onChangeText={text => handleBio(text)} />
            </View>

            {/* {renderLabels(changeLanguage('certificationText'))}
            <View style={styles.inputsContainer}>
                <FileInput labelStyling={styles.labelStyling} placeholder={changeLanguage('fileText')} />
            </View> */}

            {/* {renderLabels(changeLanguage('serviceInfoText'))}
            <View style={styles.inputsContainer}>
                <Dropdown placeholder={changeLanguage('selectServiceText')} labelStyling={styles.labelStyling} styling={styles.inputsWrapper} />
            </View> */}

            <PrimaryButton styling={styles.buttonContainer}
                loading={isUpdateExpertProfileLoading}
                disabled={isUpdateExpertProfileLoading}
                onPress={() => handlePersonalInfo()}
                textStyling={styles.btnText}
                label={changeLanguage('submit')} />
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
export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)