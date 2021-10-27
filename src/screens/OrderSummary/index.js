import React, { useState } from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Styling
import styles from './style'

//Actions
import * as AllActions from '../../redux/actions'

//Component
import { PrimaryHeading, SidebarItem, SummaryInfoItem, Scrollbar, Header, RadiusButton, PrimaryButton, VerifyLogin, VerifyCode, CustomToast, RippleEffect } from '../../components'

//Icon
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Theme
import { Color } from '../../theme'

//Utils
import { Helpers, Navigator } from '../../utils'

//Constant
const { secondary } = Color
const { navigate } = Navigator
const { translateLang, setFormdata } = Helpers

function OrderSummary(props) {
    const {
        bookingProviderReducer: { bookingProvider: { first_name, last_name, rates } },
        bookingScheduleReducer: { bookingSchedule: { date, time } },
        subServicesDetailsReducer: { subServicesDetails: { title } },
        applyCouponReducer: { coupon, isValid },
        navigation: { getParam },
        bookingReducer: { isLoading }
    } = props

    const quantity = getParam('quantity')

    const [isLogin, toggleLogin] = useState(false)
    const [isCode, toggleCode] = useState(false)
    const [showToast, toggleToast] = useState(false)
    const [isCheck, handleCheck] = useState('cash')

    const handleLogin = () => {
        toggleLogin(!isLogin)
    }

    const handleCode = () => {
        toggleCode(!isCode)
    }

    const handleToast = () => {
        toggleToast(!showToast)
    }

    const mergeLoginCode = () => {
        handleLogin()
        setTimeout(() => handleCode(), 500)
    }

    const mergeVerifyToast = () => {
        handleCode()
        setTimeout(() => handleToast(), 500)
    }

    const submitBooking = async () => {
        const { actions: { bookingAction },
            subServicesDetailsReducer: { subServicesDetails: { id } },
            bookingProviderReducer: { bookingProvider: { id: provider_id } },
            loginReducer: { user: { id: customer_id, city, country } },
            bookingScheduleReducer: { bookingSchedule: { date, time } },
            bookingDestinationReducer: { destination: { address, coords: { latitude, longitude } } }
        } = props
        const quantity = getParam('quantity')

        const payload = {
            service_id: id,
            provider_id,
            customer_id: customer_id,
            date,
            time,
            address,
            city,
            country,
            appliances: quantity,
            longitude,
            latitude,
        }
        const formData = setFormdata(payload)
        console.log("OrderSummary -> formData", formData)
        await bookingAction(formData)
        handleToast()
        setTimeout(() => navigate('OrderSuccess'), 500)
    }

    const service = {
        title: 'Service Provider',
        description: `${first_name} ${last_name}`
    }

    const expectedTime = {
        description: `${date}, ${time} `
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const toogleCheck = (value) => {
        handleCheck(value)
    }

    return <View style={styles.container} >
        <Header isBack={true} cartIcon={false} isUser={false} bellIcon={false} />
        <Scrollbar scrollViewStyle={styles.scrollStyling} >
            <PrimaryHeading heading={changeLanguage('orderSummary')} styling={styles.headingStyling} />
            <View style={styles.cardContainer}>
                <PrimaryHeading heading={changeLanguage('paymentMethod')} styling={styles.heading} />
                <View style={[styles.paymentStyling, { borderBottomWidth: 0.5 }]}>
                    <SidebarItem disabled={true} containerStyling={styles.sidebarStyling} label={changeLanguage('cash')}
                        iconComponent={<MaterialCommunityIcons name='cash' style={styles.cashIcon} />} />
                    {isCheck === 'cash' ? <RadiusButton styling={styles.iconStyling} onPress={() => toogleCheck('cash')}>
                        <AntDesign name='check' style={styles.icon} />
                    </RadiusButton> : <RippleEffect style={styles.unselected} onPress={() => toogleCheck('cash')} />}
                </View>
                <View style={styles.paymentStyling}>
                    <SidebarItem disabled={true} iconComponent={<MaterialCommunityIcons name='credit-card-outline' style={styles.creditIcon} />}
                        containerStyling={styles.sidebarStyling} label={changeLanguage('online')} onPress={() => toogleCheck('online')} />
                    {isCheck === 'online' ? <RadiusButton styling={styles.iconStyling} onPress={() => toogleCheck('online')}>
                        <AntDesign name='check' style={styles.icon} />
                    </RadiusButton> : <RippleEffect style={styles.unselected}  onPress={() => toogleCheck('online')}/>}
                </View>
            </View>
            <View style={styles.summaryCardStyling}>
                <SummaryInfoItem containerStyling={styles.removePadding} data={expectedTime} />
                <SummaryInfoItem icon={<AntDesign name='tool' style={styles.toolIcon} />}
                    data={service} descriptionStyling={styles.serviceText} containerStyling={[styles.servicesStyling, styles.removePadding]} />
            </View>
            <View style={styles.descriptionContainer} >
                <PrimaryHeading heading={changeLanguage('initialInvoice')} styling={styles.initial} />
                <PrimaryHeading heading={`${title} Installation`} styling={styles.installation} />
                <View style={styles.dataContaier}>
                    <PrimaryHeading heading={`${quantity}x ${title}`} styling={styles.label} />
                    <PrimaryHeading heading={`Rs.${rates * quantity}`} styling={styles.value} />
                </View>

                {coupon && isValid && <View style={styles.dataContaier}>
                    <PrimaryHeading heading='Coupon Details' styling={styles.label} />
                    <View style={[styles.nestedDataContainer]}>
                        <PrimaryHeading heading={`Code: ${coupon.coupon_code}`} styling={styles.extraDetails} />
                        <PrimaryHeading heading={`Discount: ${coupon.discount_type === 'Fixed' ? 'Rs.' : ''}${coupon.discount}${coupon.discount_type === 'Percentage' ? '%' : ''}`} styling={styles.extraDetails} />
                    </View>
                </View>}

                <View style={styles.dataContaier}>
                    <PrimaryHeading heading={changeLanguage('serviceCharge')} styling={styles.label} />
                    <View style={[styles.nestedDataContainer]}>
                        <PrimaryHeading heading={isValid && coupon ? `${coupon.discount_type === 'Fixed' ? `Rs.${(rates * quantity) - coupon.discount}` : `Rs.${(rates * quantity) - ((coupon.discount / 100) * (rates * quantity))}`}` : `Rs.${rates * quantity}`} styling={styles.extraDetails} />
                        {isValid && <PrimaryHeading heading={`You saved: ${coupon.discount_type === 'Fixed' ? `Rs.${coupon.discount}` : `Rs.${((coupon.discount / 100) * (rates * quantity))}`}`} styling={styles.off} />}
                        <PrimaryHeading heading={changeLanguage('totalEstimatePrice')} styling={styles.extraDetails} />
                    </View>
                </View>

                {/* <View style={styles.dataContaier}>
                    <PrimaryHeading heading={changeLanguage('serviceCharge')} styling={[styles.label, { paddingVertical: 17 }]} />
                    <View style={[styles.nestedDataContainer]}>
                        <PrimaryHeading heading='250 RS' styling={styles.label} />
                    </View>
                </View> */}
                {/* <View style={styles.dataContaier}>
                    <PrimaryHeading heading={changeLanguage('serviceCharge')} styling={[styles.label, { paddingVertical: 17 }]} />
                    <View style={styles.nestedDataContainer}>
                        <PrimaryHeading heading='250 RS' styling={styles.label} />
                        <PrimaryHeading heading={changeLanguage('totalEstimatePrice')} styling={styles.value} />
                    </View>
                </View> */}
                {/* <View style={styles.dataContaier}>
                    <View style={styles.stopStyling}>
                        <PrimaryHeading heading={changeLanguage('minimumCharge')} styling={styles.label} />
                        <Octicons name='stop' style={styles.stop} />
                    </View>
                    <PrimaryHeading heading='100' styling={{ ...styles.value, textDecorationLine: 'line-through' }} />
                </View> */}
            </View>
            <PrimaryButton label={changeLanguage('submitOrder')} styling={styles.submitButtonStyling} textStyling={styles.submitButtonText}
                rippleColor={secondary} rippleContainerBorderRadius={10} onPress={handleLogin} />
        </Scrollbar>
        <VerifyLogin isVisible={isLogin} handleBack={handleLogin} handleLogin={mergeLoginCode} value={isLogin} onChangeText={text => handleLogin(text)} />
        <VerifyCode isVisible={isCode} handleBack={handleCode} handleVerify={mergeVerifyToast} value={isCode} onChangeText={text => handleCode(text)} />
        <CustomToast isVisible={showToast} onPress={submitBooking} dynamics={isLoading} />
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    bookingScheduleReducer: state.bookingScheduleReducer,
    bookingProviderReducer: state.bookingProviderReducer,
    subServicesDetailsReducer: state.subServicesDetailsReducer,
    applyCouponReducer: state.applyCouponReducer,
    loginReducer: state.loginReducer,
    bookingDestinationReducer: state.bookingDestinationReducer,
    bookingReducer: state.bookingReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(AllActions, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)