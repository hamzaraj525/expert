import React from 'react'
import { I18nManager } from 'react-native'
import { createAppContainer, createStackNavigator, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'

//Screens
import loadingScreen from './loadingScreen'
import introScreen from './introScreen'
import languageScreen from './languageScreen'
import selectAuthScreen from './selectAuthScreen'
import signInScreen from './signInScreen'
import signUpScreen from './signUpScreen'
import personalInfoScreen from './personalInfoScreen'
import homeScreen from './homeScreen'
import locationScreen from './locationScreen'
import scheduleScreen from './scheduleScreen'
import selectServiceProviderScreen from './selectServiceProviderScreen'
import selectSubCategoryScreen from './selectSubCategoryScreen'
import orderGuaranteeScreen from './orderGuaranteeScreen'
import orderCartScreen from './orderCartScreen'
import orderSummaryScreen from './orderSummaryScreen'
import orderSuccessScreen from './orderSuccessScreen'
import faqScreen from './faqScreen'
import accountSettingScreen from './accountSettingScreen'
import aboutUsScreen from './aboutUsScreen'
import customerHappinessScreen from './customerHappinessScreen'
import approvalScreen from './approvalScreen'
import chatScreen from './chatScreen'
import myOrderScreen from './myOrderScreen'
import inboxScreen from './inboxScreen'
import registerProviderScreen from './registerProviderScreen'
import orderDetailsScreen from './orderDetailsScreen'
import viewProfileScreen from './viewProfileScreen'
import seeAllCategoriesScreen from './seeAllCategoriesScreen'
import searchResultScreen from './searchResultScreen'

//Components
import { Sidebar, BottomBar } from '../components'

//Constants
const flag = I18nManager.isRTL

const LoadingStack = createStackNavigator({
    Loading: loadingScreen
})

const IntroStack = createStackNavigator({
    Intro: introScreen
})

const LanguageStack = createStackNavigator({
    Language: languageScreen
})

const SelectAuthStack = createStackNavigator({
    SelectAuth: selectAuthScreen
})

const SignInStack = createStackNavigator({
    SignIn: signInScreen,
    RegisterProvider: registerProviderScreen,
})

const SignUpStack = createStackNavigator({
    SignUp: signUpScreen
})

const MyOrderStack = createStackNavigator({
    MyOrder: myOrderScreen,
    OrderDetails: orderDetailsScreen
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index === 0
    })
})

const ChatStack = createStackNavigator({
    Inbox: inboxScreen,
    Chat: chatScreen
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index === 0
    })
})

const AccountSettingStack = createStackNavigator({
    AccountSetting: accountSettingScreen
})

const FaqStack = createStackNavigator({
    FAQ: faqScreen
})

const CustomerHappinessStack = createStackNavigator({
    CustomerHappiness: customerHappinessScreen
})

const ApprovalStack = createStackNavigator({
    Approval: approvalScreen
})

const AboutUsStack = createStackNavigator({
    AboutUs: aboutUsScreen
})

const PersonalInfoStack = createStackNavigator({
    PersonalInfo: personalInfoScreen
})

const ViewProfileStack = createStackNavigator({
    Profile: viewProfileScreen
})

const ServiceStack = createStackNavigator({
    Home: homeScreen,
    SubCategory: selectSubCategoryScreen,
    OrderGuarantee: orderGuaranteeScreen,
    Location: locationScreen,
    Schedule: scheduleScreen,
    ServiceProvider: selectServiceProviderScreen,
    Cart: orderCartScreen,
    OrderSummary: orderSummaryScreen,

    AllCategories: seeAllCategoriesScreen,
    SearchResult: searchResultScreen
}, {
    navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index === 0 || navigation.state.index === 5
    })
})

const OrderSuccessStack = createStackNavigator({
    OrderSuccess: orderSuccessScreen
})

const TabNavigatorExpert = createBottomTabNavigator({
    MyOrderStack,
    ApprovalStack,
    ChatStack
},
    {
        tabBarComponent: ({ navigation }) => {
            return <BottomBar routeIndex={navigation.state.index} />
        }
    });

const TabNavigatorCustomer = createBottomTabNavigator({
    ServiceStack,
    MyOrderStack,
    ChatStack
},
    {
        tabBarComponent: ({ navigation }) => {
            return <BottomBar routeIndex={navigation.state.index} />
        }
    });

const MainStackExpert = createDrawerNavigator({
    TabNavigatorExpert,
    FaqStack,
    AccountSettingStack,
    AboutUsStack,
    PersonalInfoStack,
    CustomerHappinessStack,
    MyOrderStack,
    ViewProfileStack
}, {
    contentComponent: () => <Sidebar />,
    overlayColor: 'transparent',
    drawerPosition: flag ? 'right' : 'left'
})

const MainStackCustomer = createDrawerNavigator({
    TabNavigatorCustomer,
    FaqStack,
    AccountSettingStack,
    AboutUsStack,
    PersonalInfoStack,
    CustomerHappinessStack,
    MyOrderStack,
    ViewProfileStack,
    OrderSuccessStack
}, {
    contentComponent: () => <Sidebar />,
    overlayColor: 'transparent',
    drawerPosition: flag ? 'right' : 'left'
})

const AppContainer = createSwitchNavigator({
    LoadingStack,
    IntroStack,
    LanguageStack,
    SelectAuthStack,
    SignInStack,
    SignUpStack,
    MainStackExpert,
    MainStackCustomer
})

export default createAppContainer(AppContainer);