import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

//Icons
import Octicons from 'react-native-vector-icons/Octicons'

//Styling
import styles from './style'

//Utils
import { Helpers } from '../../utils'

//Utils
import { Images } from '../../utils'

//Component
import { Header, Scrollbar, PrimaryButton, PrimaryHeading, SummaryInfoItem, ImageView } from '../../components'

//Constant
const { translateLang } = Helpers
const { non_standard, spare_parts } = Images

function OrderDetails(props) {

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const labelOne = {
        title: 'Spare Parts',
        description: 'The price includes only Labor work, no spare parts fee'
    }

    const orderData = props.navigation.getParam('data')

    const { bookingstatus, service_id, bookingdate, no_of_appliances, coupon_discount, coupon_id, amount_recieved } = orderData

    return <View style={styles.container}>
        <Header isBack={true} isUser={false} />
        <Scrollbar>
            <View style={styles.headingContainer}>
                <PrimaryHeading heading={service_id} styling={styles.heading} />
            </View>
            <View style={styles.primaryContainer}>
                <PrimaryButton styling={styles.btn} textStyling={styles.btnText}
                    label={bookingstatus.toUpperCase()}
                />
                <PrimaryHeading heading={moment(bookingdate).endOf('day').fromNow()} styling={styles.time} />
            </View>

            <View style={styles.secondaryContainer}>
                <View style={styles.innerHeading}>
                    <PrimaryHeading heading={`${service_id} - Not Included in Pricing`} styling={styles.secondaryTitle} />
                </View>
                <SummaryInfoItem
                    icon={<ImageView local={spare_parts} containerStyling={styles.imgPlaceholder} styling={styles.imgs} />}
                    data={labelOne} descriptionStyling={styles.descriptionStyling} labelStyling={styles.labelStyling} />
                <SummaryInfoItem
                    icon={<ImageView local={non_standard} containerStyling={styles.imgPlaceholder} styling={styles.imgs} />}
                    data={labelOne} descriptionStyling={styles.descriptionStyling} labelStyling={styles.labelStyling} />
            </View>

            <View style={styles.descriptionContainer} >
                <PrimaryHeading heading={changeLanguage('initialInvoice')} styling={styles.initial} />
                <PrimaryHeading heading={`${service_id} Installation`} styling={styles.installation} />
                <View style={styles.dataContaier}>
                    <PrimaryHeading heading={`${no_of_appliances}x ${service_id}`} styling={styles.label} />
                    <PrimaryHeading heading={`Rs.${amount_recieved}`} styling={styles.value} />
                </View>

                <View style={styles.dataContaier}>
                    <PrimaryHeading heading={changeLanguage('serviceCharge')} styling={[styles.label, { paddingVertical: 17 }]} />
                    <View style={styles.nestedDataContainer}>
                        <PrimaryHeading heading={`Rs.${amount_recieved}`} styling={styles.label} />
                        <PrimaryHeading heading={changeLanguage('totalEstimatePrice')} styling={styles.value} />
                    </View>
                </View>
                <View style={styles.dataContaier}>
                    <View style={styles.stopStyling}>
                        <PrimaryHeading heading={changeLanguage('minimumCharge')} styling={styles.label} />
                        <Octicons name='stop' style={styles.stop} />
                    </View>
                    <PrimaryHeading heading='Rs.100' styling={[styles.value, { textDecorationLine: 'line-through' }]} />
                </View>
            </View>
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(OrderDetails)