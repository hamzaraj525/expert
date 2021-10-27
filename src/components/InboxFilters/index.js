import React, { useState } from 'react'
import { View } from 'react-native';
import { connect } from 'react-redux'

//Icons
import Entypo from 'react-native-vector-icons/Entypo'

//Component
import { RippleEffect, PrimaryHeading, ImageView } from '../../components';

//Styling
import styles from './style';

//Utils
import { Images, Helpers } from '../../utils';

//Theme
import { Color } from '../../theme';

//Constant
const { secondary, primary } = Color
const { icon_filter } = Images
const { translateLang } = Helpers

function InboxFilters(props) {
    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }
    
    const [inboxFilter, handleInboxFilter] = useState(false)
    const [readFilters, handleReadFilters] = useState(false)
    const [selectedInbox, selectInboxFilter] = useState(changeLanguage('labelInbox'))
    const [selectedRead, selectReadFilter] = useState('')

    const {
        containerStyling = {},
        onFilterSelect = () => { }
    } = props

    const selectionOne = value => {
        selectInboxFilter(value)
        handleInboxFilter(false)
        onFilterSelect(value)
    }

    const selectionTwo = value => {
        selectReadFilter(value)
        handleReadFilters(false)
        onFilterSelect(value)
    }

    

    const inboxDropdowns = [changeLanguage('labelInbox'), changeLanguage('labelArchive'), changeLanguage('labelSpam'), changeLanguage('labelDeleted')]
    const filtersDropdowns = [changeLanguage('labelLatest'), changeLanguage('labelRead'), changeLanguage('labelUnread'), changeLanguage('labelFav')]

    return <View style={[styles.container, containerStyling]} >
        <RippleEffect
            onPress={() => handleInboxFilter(!inboxFilter)}
            rippleContainerBorderRadius={0} rippleColor={primary} style={styles.inboxContainer}>
            <PrimaryHeading heading={selectedInbox} styling={styles.inboxText} />
            <Entypo name="chevron-small-down" style={styles.chevIcon} />
        </RippleEffect>
        <RippleEffect
            onPress={() => handleReadFilters(!readFilters)}
            rippleContainerBorderRadius={100} rippleColor={secondary} style={styles.filterContainer}>
            <ImageView local={icon_filter} containerStyling={styles.filterImgCont} styling={styles.filterImgCont} />
        </RippleEffect>
        {inboxFilter && <View style={styles.inboxDropdown}>
            {inboxDropdowns.map((val, ind) => {
                return <RippleEffect key={ind} style={styles.item} onPress={() => selectionOne(val)}>
                    <PrimaryHeading heading={val} rippleContainerBorderRadius={0} rippleColor={primary} />
                </RippleEffect>
            })}
        </View>}
        {readFilters && <View style={styles.featDropdown}>
            {filtersDropdowns.map((val, ind) => {
                return <RippleEffect key={ind} style={styles.itemsSecondary} onPress={() => selectionTwo(val)}>
                    <PrimaryHeading heading={val} rippleContainerBorderRadius={0} styling={styles.secondaryText} rippleColor={primary} />
                </RippleEffect>
            })}
        </View>}
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage
})

export default connect(mapStateToProps)(InboxFilters)