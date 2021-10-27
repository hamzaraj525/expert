import React, { useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Action
import * as AllAction from '../../redux/actions'

//Styling
import styles from './style'

//Iocn
import FontAwesome from 'react-native-vector-icons/FontAwesome'

//Utils
import { Helpers, Images } from '../../utils'

//Component
import { Scrollbar, PrimaryHeading, ImageView, Header, SidebarItem, Spinner, Empty } from '../../components'

//Constant
const { categoryPlaceholder } = Images
const { translateLang } = Helpers

function Faq(props) {

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    useEffect(() => {
        handleData()
    }, [])

    const handleData = async () => {
        const { action: { faqAction } } = props
        await faqAction()
    }

    const { faqReducer: { faqs, isLoading } } = props
    return <View style={styles.container} >
        <Header title={changeLanguage('faqText')} cartIcon={false} isUser={false} bellIcon={false} />
        {!isLoading && faqs && !faqs.length ?
            <Empty /> :
            <Scrollbar scrollViewStyle={{flex: 1}} >
                <ImageView local={categoryPlaceholder} containerStyling={styles.imageContainer} styling={styles.image} />
                <Spinner imageShown={false} isVisible={isLoading} />
                {faqs.map((val, ind) => {
                    return <>
                        <SidebarItem key={ind} label={val.question} containerStyling={styles.textContaier} labelStyling={styles.primaryText}
                            iconComponent={<FontAwesome name='question-circle-o' style={styles.iconStyling} />} />
                        <PrimaryHeading styling={styles.secondaryStyling} heading={val.answer} />
                    </>
                })}
            </Scrollbar>
        }
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    faqReducer: state.faqReducer
})

const mapDispatchtoProps = (dispatch) => {
    return {
        action: bindActionCreators(AllAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Faq)
