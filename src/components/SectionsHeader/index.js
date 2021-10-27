import React from 'react'
import { View } from 'react-native'

//Styling
import styles from './style'

//Component
import { PrimaryHeading, WrapperHeader } from '..';

export default function SectionHeader(props) {
    const {
        containerStyling = {},
        primaryContainer = {},
        primaryText = 'AIR CONDITIONER INSTALLATION',
        secondaryText = 'The Service Includes Installation for Internal and External Air Conditioning Units',
        description = 'APPROXIMATELY PRICES ARE BASED ON YOUR SELECTED LOCATION PAKISTAN-KARACHI',
        isCard = true,
        isDetail = false
    } = props

    return <View style={[styles.contanier, containerStyling]}>
        <View style={[styles.primaryContainer, primaryContainer]}>
            <PrimaryHeading heading={primaryText} styling={isDetail ? styles.descriptionHeader : styles.primaryTextStyling} />
            {isDetail && <View style={styles.descriptionContainer} >
                <PrimaryHeading heading={description} styling={styles.descriptionStyling} />
            </View>}
        </View>
        {isCard && <WrapperHeader contanierStyling={styles.secondaryContainer} title={secondaryText} textStyling={styles.secondaryTextStyling} />}
    </View>
}