import React, { useEffect } from 'react'
import { connect } from 'react-redux'

//Components
import { Spinner } from '../../components'

//Utils
import { Navigator } from '../../utils'

//Constant
const { navigate } = Navigator

const Loading = (props)=> {
    const { showIntro, selectedLanguage, loginReducer: { user: { type } } } = props

    useEffect(() => { checkingUser() }, [])

    const checkingUser = () => {
        setTimeout(() => {
            if (type) {
                navigate(type === 'expert' ? 'MainStackExpert' : 'MainStackCustomer')
            } else {
                if (showIntro) {
                    if (selectedLanguage) {
                        navigate('SelectAuthStack')
                    } else {
                        navigate('LanguageStack')
                    }
                } else {
                    navigate('IntroStack')
                }
            }
        }, 2000)
    }

    return <Spinner />
}

const mapStateToProps = state => ({
    showIntro: state.introductionReducer.showIntro,
    selectedLanguage: state.setLanguageReducer.selectedLanguage,
    loginReducer: state.loginReducer
})

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)