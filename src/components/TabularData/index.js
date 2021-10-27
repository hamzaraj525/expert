import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux'

//Component
import { PrimaryHeading } from '../../components';

//Utils
import { Helpers } from '../../utils'

//Icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Styling
import styles from './style';

//Constants
const { translateLang } = Helpers

function TabularData(props) {
    
    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const {
        containerStyling = {},
        headers = [
            { title: changeLanguage('numberUnit') },
            {
                title: changeLanguage('bigOffer'),
                icon: <MaterialCommunityIcons name="chat-outline" style={styles.icon} />
            },
            { title: changeLanguage('price') }
        ],
        data = [
            {
                unit: '1 - 2',
                offer: `${changeLanguage('youSave')} 8%`,
                price: `250 ${changeLanguage('perUnit')}`
            },
            {
                unit: '3 - 4',
                offer: '',
                price: `350 ${changeLanguage('perUnit')}`
            },
            {
                unit: '3 - 4',
                offer: `${changeLanguage('youSave')} 100%`,
                price: `450 ${changeLanguage('perUnit')}`
            }
        ],
    } = props

    const headerLength = 100 / headers.length

    return <View style={[styles.container, containerStyling]} >
        <View style={styles.headerWrapper} >
            {headers.map((val, ind) => {
                const { title, icon } = val
                return <View key={ind} style={[styles.headerStyling, { width: `${headerLength}%` }]} >
                    {!!icon && icon}
                    <PrimaryHeading heading={title} styling={styles.heading} />
                </View>
            })}
        </View>
        {data.map((val, ind) => {
            const { unit, offer, price } = val
            return <View style={styles.dataWrapper}>
                <View key={ind} style={[styles.dataStyling, { width: `${headerLength}%` }]}>
                    <PrimaryHeading heading={unit} styling={styles.data} />
                </View>
                <View key={ind} style={[styles.dataStyling, { width: `${headerLength}%` }]}>
                    <PrimaryHeading heading={offer} styling={styles.data} />
                </View>
                <View key={ind} style={[styles.dataStyling, { width: `${headerLength}%` }]}>
                    <PrimaryHeading heading={price} styling={styles.data} />
                </View>
            </View>
        })}
    </View>
}
const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps) (TabularData)