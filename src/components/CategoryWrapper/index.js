import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'

//Components
import { PrimaryHeading, RippleEffect, WrapperHeader, CategortCardItem } from '../../components'

//Utils
import { Helpers } from '../../utils'

//Styling
import styles from './style'

//Constants
const { translateLang } = Helpers

const CategoryWrapper = (props) => {
    const {
        listTitle = '',
        data = [0, 0, 0, 1],
        seeAllHandler = () => { },
        onPress = () => { },
        categoryTitle = 'Electrical'
    } = props

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    return (
        <>
            {!!listTitle && <View style={styles.titleHeader}>
                <PrimaryHeading heading={listTitle} />
                <RippleEffect onPress={seeAllHandler}>
                    <PrimaryHeading heading={changeLanguage('seeAll')} styling={{ borderBottomWidth: 2 }} />
                </RippleEffect>
            </View>}
            <WrapperHeader title={categoryTitle} contanierStyling={styles.header} />
            <FlatList
                data={data}
                renderItem={(items) => <CategortCardItem containerStyling={styles.makeSpace}
                    onPress={onPress} data={items}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </>
    )
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps) (CategoryWrapper)