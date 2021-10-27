import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Styling
import styles from './style'

//Action
import * as AllAction from '../../redux/actions'

//Components
import { Header, Scrollbar, SubCategoryItem, Empty, Spinner } from '../../components'

//Utils
import { Helpers, Navigator } from '../../utils'

//Constant
const { translateLang } = Helpers
const { navigate } = Navigator

function SearchResult(props) {
    const { searchReducer: { isLoading, searchServices } } = props

    const switchScreen = val => {
        navigate('SubCategory', {data : val})
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return <View style={styles.maincontainer}>
        <Header isBack={true} isUser={false} bellIcon={false} title={changeLanguage('searchResult')} />
        <Scrollbar scrollViewStyle={styles.dataWrapper} >
            {isLoading ?
                <Spinner isVisible={isLoading} imageShown={false} /> :
                !searchServices.length ? <Empty /> :
                searchServices.map((val, ind) => {
                    return <SubCategoryItem data={val} key={ind} containerStyling={styles.itemWrapper} onPress={() => switchScreen(val) } />
                })}
        </Scrollbar>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    searchReducer: state.searchServicesReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        action: bindActionCreators(AllAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)