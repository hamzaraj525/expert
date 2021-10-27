import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'

//Actions
import * as AllActions from '../../redux/actions'

//Components
import { Header, SectionsHeader, SchedulePagination, Scrollbar, PrimaryButton } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { translateLang, setFormdata, warningToast } = Helpers

function Schedule(props) {
    const currentDate = () => {
        const date = new Date()
        const parseDate = moment(date.toString().slice(0, 16)).format('MM/DD/YYYY')
        return parseDate
    }

    const [time, handleTime] = useState('')
    const [date, handleDate] = useState(currentDate())

    const searchServiceProviders = async () => {
        const { actions: { serviceProviderAction, bookingScheduleAction }, subServicesDetailsReducer: { subServicesDetails: { id } } } = props
        const { loginReducer: { user: { city } } } = props
        if (!date) return warningToast('Warning', 'Select date!')
        if (!time) return warningToast('Warning', 'Select time!')

        const parseDate = moment(date.toString().slice(0, 16)).format('MM/DD/YYYY')

        const payload = {
            city,
            date: parseDate,
            service_id: id,
            time
        }

        await bookingScheduleAction(payload)

        const formData = setFormdata(payload)
        await serviceProviderAction(formData)
    }



    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const { serviceProvidersReducer: { isLoading } } = props

    return <View style={styles.container}>
        <Header
            isBack={true}
            isUser={false} />
        <SectionsHeader
            isCard={false}
            primaryContainer={styles.header}
            primaryText={changeLanguage('scheduleTitle')} />
        <Scrollbar scrollViewStyle={styles.timmimg}>
            <SchedulePagination getTiming={time => handleTime(time)} getDate={date => handleDate(date)} />
        </Scrollbar>
        <PrimaryButton
            loaderColor={secondary}
            loading={isLoading}
            disabled={isLoading}
            onPress={searchServiceProviders}
            rippleColor={secondary}
            styling={styles.btn}
            textStyling={styles.btnText}
            label={changeLanguage('continueButtonText')} />
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    serviceProvidersReducer: state.serviceProvidersReducer,
    subServicesDetailsReducer: state.subServicesDetailsReducer,
    loginReducer: state.loginReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(AllActions, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule)