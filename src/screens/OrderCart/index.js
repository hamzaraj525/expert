import React, { useState } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

//Components
import { PrimaryHeading, Header, Scrollbar, SectionsHeader, CartItem, PrimaryButton, ServiceProvider } from '../../components'

//Themes
import { Color } from '../../theme'

//Utils
import { Navigator, Helpers } from '../../utils'

//Styling
import styles from './styles'

//Constants
const { secondary } = Color
const { navigate } = Navigator
const { translateLang } = Helpers

function OrderCart(props) {
    const { subServicesDetailsReducer: { subServicesDetails },
        bookingProviderReducer: { bookingProvider } } = props
    const { title, subheading } = subServicesDetails
    const [quantity, handleQuantity] = useState(1)

    const switchScreen = (route) => {
        navigate(route, { quantity })
    }

    const addQuantity = () => {
        if (quantity !== 9) {
            handleQuantity(quantity + 1)
        }
    }
    const decreaseQuantity = () => {
        if (quantity !== 1) {
            handleQuantity(quantity - 1)
        }
    }

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return <View style={styles.container}>
        <Header
            cartIcon={false}
            isBack={true}
            isUser={false} />
        <Scrollbar>
            <SectionsHeader primaryText={`${title} Installation`} secondaryText={subheading} />
            <View style={styles.cartSection}>
                <CartItem containerStyling={styles.cartItem} plusHandler={addQuantity} minusHandler={decreaseQuantity} value={quantity} isData={false} data={{ ...subServicesDetails, provider: bookingProvider }} headingContainer={styles.headingContainer} />
            </View>
        </Scrollbar>
        <View style={styles.estimatedContainer}>
            <PrimaryHeading
                styling={styles.total}
                heading={changeLanguage('totalEstimate')} />
            <PrimaryHeading
                styling={styles.value}
                heading={`PKR ${bookingProvider.rates * quantity} + other prices upon visit`} />
        </View>
        <View style={styles.buttonContainer}>
            {/* <PrimaryButton
                onPress={() => switchScreen('Home')}
                rippleContainerBorderRadius={0}
                label={changeLanguage('addservice')}
                styling={styles.buttonContainerSecondary}
                textStyling={styles.button} /> */}
            <PrimaryButton
                onPress={() => switchScreen('OrderSummary')}
                rippleContainerBorderRadius={0}
                rippleColor={secondary}
                label={changeLanguage('continueOrder')}
                styling={styles.buttonContainerPrimary}
                textStyling={styles.button} />
        </View>
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    subServicesDetailsReducer: state.subServicesDetailsReducer,
    bookingProviderReducer: state.bookingProviderReducer
})

export default connect(mapStateToProps)(OrderCart)