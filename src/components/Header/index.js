import React, { useState } from 'react'
import { View } from 'react-native'
import { withNavigation } from 'react-navigation'

//Components
import { RippleEffect, ImageView, PrimaryHeading, NotificationPanel } from '../../components'

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign'

import FeatherIcon from 'react-native-vector-icons/Feather'

//Themes
import { Color } from '../../theme'

//Utils
import { Images, Navigator } from '../../utils'

//Styling
import styles from './style'

//Constatnt
const { secondary } = Color
const { cart_icon, menu_icon, notification_icon, profile_icon } = Images
const { goBack, navigate } = Navigator

const Header = (props) => {
    const [panel, showPanel] = useState(false)

    const {
        containerStyling,
        isBack = false,
        isUser = true,
        bellIcon = true,
        userHandler = () => { navigate('Profile') },
        navigation,
        title
    } = props

    const leftHandler = () => {
        if (isBack) {
            goBack()
        } else {
            navigation.openDrawer()
        }
    }

    const togglePanel = () => {
        showPanel(!panel)
    }

    return (
        <>
            <View style={[styles.mainContainer, containerStyling]}>
                <View style={styles.titleContainer}>
                    <View style={styles.iconWrapper}>
                        <RippleEffect rippleColor={secondary} onPress={leftHandler}>
                            {!isBack ? (
                                <FeatherIcon name='align-justify' style={styles.backIcons} />
                                ) :
                                <FeatherIcon name='arrow-left' style={styles.backIcons} />
                            }
                        </RippleEffect>
                        {isUser ? (
                            <RippleEffect rippleColor={secondary} onPress={userHandler}>
                                <FeatherIcon name='user' style={styles.backIcons} />
                            </RippleEffect>
                        ) : <View />}
                        {!!title && <PrimaryHeading heading={title} styling={styles.titleText} />}
                    </View>
                    <View style={styles.iconWrapper}>
                        {
                            bellIcon ? (
                                <RippleEffect rippleColor={secondary} onPress={togglePanel}>
                                <FeatherIcon name='bell' style={styles.backIcons} />
                                </RippleEffect>)
                                : (<View />)
                        }
                    </View>
                </View>
            </View>
            <NotificationPanel isVisible={panel} handler={togglePanel} />
        </>
    )
}

export default withNavigation(Header)