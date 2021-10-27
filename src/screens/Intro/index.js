import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Methods
import * as introductionAction from '../../redux/actions/introductionAction'

//Styling
import styles from './styles'

//Components
import { ImageView, PrimaryHeading, SquareButton } from '../../components'

//Utils
import { Navigator, Helpers } from '../../utils'

//Themes
import { Constants } from '../../theme'

//Constant
const { introSlides } = Constants
const { navigate } = Navigator
const { translateLang } = Helpers
let slidingRef

function Intro(props) {
    const [activeSlide, handleSlide] = useState(0)

    const moveSlide = () => {
        slidingRef.goToSlide(activeSlide + 1)
        handleSlide(activeSlide + 1)
    }

    const nextScreen = () => {
        const { actions: { introductionAction } } = props
        introductionAction()
        navigate('LanguageStack')
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const renderItem = ({ item }) => {
        const { image, size, slideTitleKey, slideDesKey } = item
        return (
            <View style={styles.slide}>
                <ImageView local={image} styling={size} />
                <PrimaryHeading heading={changeLanguage(slideTitleKey)} styling={styles.title} />
                <PrimaryHeading heading={changeLanguage(slideDesKey)} styling={styles.description} />
            </View>
        );
    }

    const renderNextButton = () => {
        return (
            <SquareButton onPress={moveSlide} />
        );
    }

    const renderSkipButton = () => {
        return (
            <SquareButton styling={styles.skipButton} textStyling={styles.skipText}
                label='SKIP' isIcon={false} onPress={nextScreen} />
        );
    }

    const renderDoneButton = () => {
        return (
            <SquareButton label='DONE' isIcon={false} onPress={nextScreen} />
        );
    }

    return <AppIntroSlider
        ref={ref => slidingRef = ref}
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
        showSkipButton={true}
        renderSkipButton={renderSkipButton}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        keyExtractor={(item) => item.key.toString()}
        onSlideChange={(item) => handleSlide(item)}
        renderItem={renderItem} data={introSlides} />
}

const mapStateToProps = (state) => ({
    showIntro: state.introductionReducer.showIntro,
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

const mapDispatchToProp = (dispatch) => {
    return {
        actions: bindActionCreators(introductionAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Intro)