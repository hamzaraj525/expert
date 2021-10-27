import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import * as AllActions from '../../redux/actions'

//Components
import { Header, SectionsHeader, Scrollbar, ServiceProvider, Empty } from '../../components'

//Utils
import { Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { translateLang } = Helpers

function SelectServiceProvider(props) {
    
    const switchScreen = (provider) => {
        const { actions: { bookingProviderAction } } = props
            bookingProviderAction(provider)
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const { serviceProvidersReducer: { isLoading, serviceProviders }} = props

    return <View style={styles.container}>
        <Header
            isBack={true}
            isUser={false} />
        <SectionsHeader
            isCard={false}
            primaryContainer={styles.header}
            primaryText={changeLanguage('selectSeviceProvider')} />
        {isLoading ? <Loading /> :
            !serviceProviders.length ? <Empty /> :
                <Scrollbar>
                    {serviceProviders.map((val, ind) => {
                        return <ServiceProvider key={ind} data={val} selectHandler={() => switchScreen(val)} />
                    })}
                </Scrollbar>
        }
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    serviceProvidersReducer: state.serviceProvidersReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AllActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectServiceProvider)