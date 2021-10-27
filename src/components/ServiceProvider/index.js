import React from 'react'
import { View } from 'react-native'

//Styling
import styles from './style'

//Component
import { PrimaryHeading, RatingStar, ImageView, RadiusButton, SidebarItem, RippleEffect } from '../../components'

//Icons
import Feather from 'react-native-vector-icons/Feather'

//Utils
import { Images, Helpers } from '../../utils';

//Theme
import { Color } from '../../theme';

//Constant
const { white } = Color
const { icon_dollar, profile } = Images
const { concatBaseUrl } = Helpers

export default function ServiceProvider(props) {
    const {
        containerStyling = {},
        secondaryIcon = <Feather name='check' size={25} color={white} />,
        data = {},
        isSelect = true,
        selectHandler = () => { }
    } = props

    const {
        first_name,
        last_name,
        bio = "Hello, I'm a professional Graphic Desginer, from ABC Company.",
        rates,
        rate_type,
        rating,
        image,
        paymentMethod = 'Rate Type',
        cash = 'Cash',
    } = data

    return <RippleEffect style={[styles.container, containerStyling]} onPress={selectHandler}>
        <View style={styles.alphaStyling}>
            <ImageView uri={image ? concatBaseUrl(image) : ''} containerStyling={styles.imageContainer} styling={styles.image} local={profile} />
        </View>
        <View style={styles.betaStyling}>
            <PrimaryHeading heading={`${first_name} ${last_name}`} styling={styles.text} />
            <RatingStar containerstyling={styles.rating} starSize={13} starCount={rating} />
            <PrimaryHeading heading={bio} styling={styles.description} />
            <View style={styles.cashContainer} >
                <PrimaryHeading heading={paymentMethod} styling={styles.pay} />
                <SidebarItem label={rate_type === 'perhour' ? `Rs.${rates}/perhour` : rate_type === 'overall' ? `${rates}/overall` : 'On Inspection'} icon={icon_dollar}
                    containerStyling={styles.labelContainer} imgStyling={styles.dollar} labelStyling={styles.labelText} />
            </View>
        </View>
        <View style={styles.gammaStyling}>
            <RadiusButton styling={isSelect ? null : styles.unselectRadiusBtn}>
                {isSelect && secondaryIcon}
            </RadiusButton>
        </View>
    </RippleEffect>
}