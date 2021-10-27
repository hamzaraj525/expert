import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Components
import { Wrapper, SubCategoryItem, Spinner, Empty } from '../../components'

//Actions
import * as AllActions from '../../redux/actions'


//Utils
import { Navigator } from '../../utils'

//Stling
import styles from './styles'

//Constants
const { navigate } = Navigator

function SelectSubCategory(props) {
const categoryData =  props.navigation.getParam('data')

    useEffect(() => {
        async function handleServiceDetails(id) {
            const { actions: { serviceDetailsAction } } = props
            await serviceDetailsAction(id)    
        }
        handleServiceDetails(categoryData.id)
    }, [])

    const switchScreen = (route, val) => {
        navigate(route, {val})
    }

    const renderData = () => {
        const { serviceList: { isLoading, serviceDetails } } = props
        return (
            <View style={styles.data}>
                {isLoading ? <Spinner containerStyling={{height: 500}} imageShown={false}/> :
                !serviceDetails.length ? <Empty containerStyling={{height: 500}}/> :
                serviceDetails.map((val,ind) => {
                    return <SubCategoryItem key={ind} data={val} containerStyling={styles.items} onPress={() => switchScreen('OrderGuarantee', val)}/>
                })}
            </View>
        )
    }

    return <View>
        <Wrapper data={categoryData} renderSection={renderData} />
    </View>
}

const mapStateToProps = (state) => ({
    serviceList: state.serviceDetailsReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(AllActions, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSubCategory)