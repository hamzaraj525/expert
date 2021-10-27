import React, { useState } from 'react'
import { View } from 'react-native';
import { connect } from 'react-redux'

//Component
import { RippleEffect, PrimaryHeading, ImageView } from '../../components';

//Styling
import styles from './style';

//Utils
import { Images, Helpers, Navigator } from '../../utils';

//Theme
import { Color, Metrics } from '../../theme';

//Constant
const { secondary, primary } = Color
const { home_icon, approval_icon, orders_icon, messages_icon,
    home_icon_active, approval_icon_active, orders_icon_active, messages_icon_active
} = Images
const { translateLang } = Helpers
const { screenWidth } = Metrics
const { navigate } = Navigator

function BottomBar(props) {
    const {
        containerStyling = {},
        routeIndex,
        loginReducer: { user }
    } = props

    console.log("BottomBar -> routeIndex", routeIndex)
    const { type } = user

    const changeLanguage = (key) => {
        return translateLang(props.selectedLanguages, key)
    }

    const routesExpert = [,
        {
            route: changeLanguage('orders'),
            icon: orders_icon,
            activeIcon: orders_icon_active,
            navigateTo: () => navigate('MyOrderStack')
        },
        {
            route: changeLanguage('appro'),
            icon: approval_icon,
            activeIcon: approval_icon_active,
            navigateTo: () => navigate('ApprovalStack')
        },
        {
            route: changeLanguage('msg'),
            icon: messages_icon,
            activeIcon: messages_icon_active,
            navigateTo: () => navigate('ChatStack')
        }
    ]

    const routesCustomer = [
        {
            route: changeLanguage('home'),
            icon: home_icon,
            activeIcon: home_icon_active,
            navigateTo: () => navigate('ServiceStack')
        },
        {
            route: changeLanguage('orders'),
            icon: orders_icon,
            activeIcon: orders_icon_active,
            navigateTo: () => navigate('MyOrderStack')
        },
        {
            route: changeLanguage('msg'),
            icon: messages_icon,
            activeIcon: messages_icon_active,
            navigateTo: () => navigate('ChatStack')
        }
    ]

    const manageSelection = (nextScreen, ind) => {
        nextScreen()
    }

    return <View style={[styles.container, containerStyling]} >
        {type === 'customer' ?
            routesCustomer.map((val, ind) => {
                return <RippleEffect style={styles.items} onPress={() => manageSelection(val.navigateTo, ind)}>
                    <ImageView local={routeIndex === ind ? val.activeIcon : val.icon}
                        styling={{ width: '100%', height: '100%' }}
                        containerStyling={{ width: screenWidth * 0.07, height: screenWidth * 0.07 }}
                    />
                    <PrimaryHeading heading={val.route} styling={[styles.text, { color: routeIndex === ind ? primary : secondary }]} />
                </RippleEffect>
            })
            :
            routesExpert.map((val, ind) => {
                return <RippleEffect style={styles.items} onPress={() => manageSelection(val.navigateTo, ind)}>
                    <ImageView local={routeIndex + 1 === ind ? val.activeIcon : val.icon}
                        styling={{ width: '100%', height: '100%' }}
                        containerStyling={{ width: screenWidth * 0.07, height: screenWidth * 0.07 }}
                    />
                    <PrimaryHeading heading={val.route} styling={[styles.text, { color: routeIndex + 1 === ind ? primary : secondary }]} />
                </RippleEffect>
            })
        }
    </View>
}

const mapStateToProps = (state) => ({
    selectedLanguages: state.setLanguageReducer.selectedLanguage,
    loginReducer: state.loginReducer
})

export default connect(mapStateToProps)(BottomBar)