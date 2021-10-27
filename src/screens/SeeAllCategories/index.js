import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Styling
import styles from './style'

//Action
import * as AllAction from '../../redux/actions'

//Component
import { Header, Scrollbar, SubCategoryItem, Spinner, Empty } from '../../components'

//Utils
import { Helpers, Navigator } from '../../utils'

//Constant
const { translateLang } = Helpers
const { navigate } = Navigator

function SeeAllCatogories(props) {
    const { servicesReducer: { services, isLoading } } = props

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const switchScreen = data => {
        navigate('SubCategory', {data})
    }

    return <View style={styles.container} >
        <Header isBack={true} bellIcon={false} isUser={false} title={changeLanguage('allCategories')} />
        <Scrollbar scrollViewStyle={styles.dataWrapper} >
            {isLoading ? 
            <Spinner isVisible={isLoading} imageShown={false} /> : 
            !services.length ? <Empty /> : services.map((val, ind) => {
                return val.data.map((val2, ind2) => {
                    return < SubCategoryItem key={ind2} data={val2} containerStyling={styles.itemWrapper} onPress={ () => switchScreen(val2)} />
                })
            })}
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    subServiceReducer: state.subServicesDetailsReducer,
    servicesReducer: state.servicesReducer
})

const mapDispatchtoProps = (dispatch) => {
    return {
        action: bindActionCreators(AllAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(SeeAllCatogories)