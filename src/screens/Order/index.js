import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Action
import * as AllActions from '../../redux/actions'

//Styling
import styles from './style'

//Component
import { Header, MyOrderCard, Scrollbar, PrimaryHeading, Spinner, Empty } from '../../components'

//Utils
import { Helpers, Navigator } from '../../utils'

//Constant
const { translateLang } = Helpers
const { navigate } = Navigator

class MyOrder extends React.Component {

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const { actions: { myOrdersAction }, loginReducer: { user: { id } } } = this.props
        myOrdersAction(id)
    }

    changeLanguage = (key) => {
        return translateLang(this.props.selectedLanguages, key)
    }

    nextScreen = data => {
        navigate('OrderDetails', { data })
    }

    render() {
        const { loginReducer: { user: { type } }, myOrdersReducer: { isLoading, myOrders } } = this.props
        return <View style={styles.container} >
            <Header isUser={type === 'expert' ? true : false} title={this.changeLanguage('myOrder')} />
            <PrimaryHeading heading={this.changeLanguage('orderCardTitle')} styling={styles.title} />
            {isLoading ? <Spinner isVisible={isLoading} imageShown={false} /> :
                !myOrders.length ? <Empty /> : <Scrollbar>
                    {myOrders.map((val, ind) => {
                        return <MyOrderCard onPress={() => this.nextScreen(val)} key={ind} data={val} />
                    })}
                </Scrollbar>
            }
        </View>
    }
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    loginReducer: state.loginReducer,
    myOrdersReducer: state.myOrdersReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(AllActions, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder)