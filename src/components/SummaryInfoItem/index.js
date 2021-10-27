import React from 'react'

//Icons
import Feather from 'react-native-vector-icons/Feather';

//Component
import { SidebarItem, PrimaryHeading, RippleEffect } from '../../components'

//Styling
import styles from './style'

//Theme
import { Color } from '../../theme';

//Constant
const { primary } = Color

export default function SummaryInfoItem(props) {
    const {
        containerStyling = {},
        labelStyling = {},
        descriptionStyling = {},
        icon = <Feather name='clock' size={30} color={primary} />,
        disabled = true, 
        data = {}
    } = props
    
    const {
        title = 'Expected Visit Time',
        description = 'Tuesday, August 25th from 09:00 AM to 10:00 AM'
    } = data

    return <RippleEffect style={[styles.container, containerStyling]} disabled={disabled} >
        <SidebarItem iconComponent={icon} label={title} labelStyling={[styles.text, labelStyling]}
            containerStyling={styles.primary} />
        <PrimaryHeading heading={description} styling={[styles.timeHeading, descriptionStyling]} />
    </RippleEffect>
}