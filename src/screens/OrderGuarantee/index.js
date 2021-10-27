import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Action
import * as AllActions from '../../redux/actions'

//Components
import { Header, Scrollbar, SectionsHeader, PrimaryHeading, SidebarItem, SecondaryInput, PrimaryButton } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Images, Navigator, Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { service_warranty, customer_happiness, verify_service, customer_satisfaction } = Images
const { navigate } = Navigator
const { translateLang, warningToast, setFormdata } = Helpers

function OrderGuarantee(props) {

    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        async function handleSubServicesDetails(id) {
            const { actions: { subServiceDetailsAction } } = props
            await subServiceDetailsAction(id)
        }
        const subCategory = props.navigation.getParam('val')
        const { id } = subCategory
        handleSubServicesDetails(id)
    }, [])

    const switchScreen = (route) => {
        navigate(route)
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const handleCoupon = async () => {
        const { actions: { applyCouponAction } } = props
        const subCategory = props.navigation.getParam('val')
        const { id } = subCategory

        if (!inputValue) return warningToast('Warning', 'Enter Promo Code Qurey!')

        const payload = {
            coupon_code: inputValue,
            customer_id: id
        }

        const response = await setFormdata(payload)
        await applyCouponAction(response)

    }

    const { subServicesDetailsReducer: { isLoading, subServicesDetails }, couponReducer: { isLoading: couponLoading, isValid } } = props
    return <View style={styles.container}>
        <Header
            cartHandler={() => switchScreen('Cart')}
            isBack={true}
            isUser={false} />
        <Scrollbar>
            <SectionsHeader primaryText={isLoading ? 'LOADING...' : subServicesDetails && subServicesDetails.title ? subServicesDetails.title : 'N/A'} secondaryText={isLoading ? 'LOADING...' : subServicesDetails && subServicesDetails.subheading ? subServicesDetails.subheading : 'N/A'} />
            <View style={[styles.descriptionWrapper, styles.margin]} >
                <PrimaryHeading heading='Excluded:' styling={styles.title} />
                <PrimaryHeading styling={styles.description} heading={isLoading ? 'LOADING...' : subServicesDetails && subServicesDetails.excluded ? subServicesDetails.excluded : 'N/A'} />
            </View>
            <View style={styles.descriptionWrapper} >
                <PrimaryHeading heading={'Included : '} styling={styles.title} />
                <PrimaryHeading styling={styles.description} heading={isLoading ? 'LOADING...' : subServicesDetails && subServicesDetails.included ? subServicesDetails.included : 'N/A'} />
            </View>
            <View style={styles.section}>
                <PrimaryHeading styling={styles.sectionHeading} heading={changeLanguage('guaranteeText')} />
                <View style={styles.sectionContent}>
                    <SidebarItem
                        labelStyling={styles.label}
                        imgStyling={styles.icon}
                        icon={service_warranty}
                        disabled={true}
                        containerStyling={styles.sectionItems}
                        label={changeLanguage('warrantyServiceText')} />
                    <SidebarItem
                        labelStyling={styles.label}
                        imgStyling={styles.icon}
                        disabled={true}
                        icon={customer_satisfaction}
                        containerStyling={styles.sectionItems}
                        label={changeLanguage('customerSatisfaction')} />
                    <SidebarItem
                        labelStyling={styles.label}
                        imgStyling={styles.icon}
                        disabled={true}
                        icon={customer_happiness}
                        containerStyling={styles.sectionItems}
                        label={changeLanguage('customerCenter')} />
                    <SidebarItem
                        labelStyling={styles.label}
                        imgStyling={styles.icon}
                        disabled={true}
                        icon={verify_service}
                        containerStyling={styles.sectionItems}
                        label={changeLanguage('verified')} />
                </View>
            </View>
            <View style={styles.promoSection}>
                <PrimaryHeading
                    heading={changeLanguage('promoText')}
                    styling={styles.promoHeading} />
                <View style={styles.promoSecondarySection}>
                    <SecondaryInput
                        inputValue={inputValue}
                        inputHandler={(e) => setInputValue(e)}
                        containerStyling={styles.inputContainer}
                        isFilter={false}
                        isSearch={false}
                        placeholder={changeLanguage('promoCode')}
                        inputStyling={styles.input}
                    />
                    <View style={styles.btnContainer}>
                        <PrimaryButton label={!couponLoading && changeLanguage('useCode')} onPress={handleCoupon} loading={couponLoading} disabled={couponLoading}
                            textStyling={styles.btnText} styling={styles.btn} rippleColor={secondary} loaderStyling={styles.loader} />
                    </View>
                </View>
            </View>
            <PrimaryButton
                onPress={() => switchScreen('Location')}
                label={changeLanguage('pricing')}
                styling={styles.pricingButton}
                rippleColor={secondary}
                disabled={isLoading}
                rippleContainerBorderRadius={styles.pricingButton.borderRadius}
                textStyling={styles.pricingButtonText} />
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    subServicesDetailsReducer: state.subServicesDetailsReducer,
    couponReducer: state.applyCouponReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(AllActions, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderGuarantee)