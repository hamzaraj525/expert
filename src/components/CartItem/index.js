import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'

//Component
import { PrimaryHeading, CartCounter, TabularData } from '..';

//Utils
import { Navigator, Helpers } from '../../utils'

//Styling
import styles from './style';

//Contants
const { translateLang } = Helpers

function CartItem(props) {
    const {
        containerStyling = {},
        data = {},
        plusHandler = () => {},
        minusHandler = () => {},
        headers,
        tableData,
        isData = true,
        value = 4,
        headingContainer = {}
    } = props

    const {
        title = 'Big Shelf or Painting or Mirrror installation',
        unitDescription = 'Starting from 75 RS per unit',
        provider
    } = data

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return <View style={[styles.container, containerStyling]} >
        <View style={styles.headingWrapper} >
            <View style={[styles.headingStyling, headingContainer]} >
                <PrimaryHeading heading={title} styling={styles.heading} />
            </View>
            <CartCounter value={value} plusHandler={plusHandler} minusHandler={minusHandler} />
        </View>
        <PrimaryHeading heading={`${changeLanguage('startingFrom')} Rs.${provider.rates}/${provider.rate_type}`} styling={styles.description} />
        {isData && <TabularData headers={headers} data={tableData} />}
    </View>
}
const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps) (CartItem)