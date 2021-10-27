import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import * as AllActions from '../../redux/actions'

//Component
import { Header, ImageView, SecondaryInput, CategoryWrapper, Scrollbar, RippleEffect, PrimaryHeading, Spinner } from '../../components'

//Icons
import IonIcons from 'react-native-vector-icons/Ionicons'

//Utils
import { Navigator, Helpers } from '../../utils'

//Styles
import styles from './styles'

//Constants
const { navigate } = Navigator
const { translateLang, warningToast } = Helpers

function Home(props) {
    const { servicesReducer: { services, isLoading }, searchReducer: { isLoading: searchLoader } } = props
    const [title, handleTitle] = useState('')
    
    const switchScreen = () => {
        navigate('SubCategory')
    }

    useEffect(() => {
        const { actions: { servicesAction } } = props
        async function services() {
            await servicesAction()
        }
        services()
    }, [])

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const handleSearch = async () => {
        const { actions: { searchServicesAction } } = props
        if(!title) return warningToast('Warning', 'Enter Search Qurey!')
        await searchServicesAction(title)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Header />
            <Scrollbar>
                <ImageView containerStyling={styles.logoContainer} styling={styles.logo} />
                <PrimaryHeading heading={changeLanguage('homeTitle')} styling={styles.heading} />
                <View style={styles.inputArea}>
                    <SecondaryInput 
                    placeholder={changeLanguage('homeInput')} 
                    searchHandler={handleSearch} 
                    isLoading={searchLoader} 
                    disabled={searchLoader}
                    containerStyling={styles.input} 
                    inputValue={title} 
                    inputHandler={text => handleTitle(text)} 
                    />
                    <RippleEffect rippleContainerBorderRadius={100}>
                        <IonIcons name='ios-location-outline' style={styles.icon} />
                    </RippleEffect>
                </View>
                {isLoading ? <Spinner
                    imageShown={false}
                    isVisible={isLoading}
                    containerStyling={{ height: 200 }} />
                    : services.map((val, ind) => {
                        if (val.data.length) return <CategoryWrapper listTitle={ind === 0 ? changeLanguage('categories') : ''}
                            seeAllHandler={() => navigate('AllCategories')}
                            onPress={switchScreen}
                            categoryTitle={val.title}
                            data={val.data}
                            key={ind}
                        />
                    })}
            </Scrollbar>
        </View>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    servicesReducer: state.servicesReducer,
    searchReducer: state.searchServicesReducer
})

const mapDispatchToProps = (payload) => {
    return {
        actions: bindActionCreators(AllActions, payload)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)