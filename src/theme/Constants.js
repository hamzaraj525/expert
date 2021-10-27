//Utils
import { Images, Navigator } from '../utils'

//Theme
import { Metrics } from '../theme'

//Constants
const { slide_one, slide_two, slide_three, slide_four, customer_center, my_orders, account_setting, faq, about_us, sign_out, secondary_avatar, profile } = Images
const { screenWidth, screenHeight } = Metrics
const { navigate } = Navigator

const Constants = {
  textRegular: 'SFUIText-Regular',
  url : 'http://spaceshiptech.com/expert',
  introSlides: [
    {
      key: 1,
      image: slide_one,
      size: { width: screenWidth * 0.9, height: screenHeight * 0.36, resizeMode: 'contain', marginTop: screenHeight * 0.15 },
      slideTitleKey: 'firstSlideTitle',
      slideDesKey: 'firstSlideDescription'
    },
    {
      key: 2,
      image: slide_two,
      size: { width: screenWidth * 0.7, height: screenHeight * 0.33, marginTop: screenHeight * 0.15 },
      slideTitleKey: 'secondSlideTitle',
      slideDesKey: 'secondSlideDescription'
    },
    {
      key: 3,
      image: slide_three,
      size: { width: screenWidth * 0.8, height: screenHeight * 0.33, marginTop: screenHeight * 0.15 },
      slideTitleKey: 'thirdSlideTitle',
      slideDesKey: 'thirdSlideDescription'
    },
    {
      key: 4,
      image: slide_four,
      size: { width: screenWidth * 0.8, height: screenHeight * 0.3, marginTop: screenHeight * 0.15 },
      slideTitleKey: 'fourthSlideTitle',
      slideDesKey: 'fourthSlideDescription'
    }
  ],
  menu: [
    {
      menuKey: 'customerCenter',
      icon: customer_center,
      event: () => navigate('CustomerHappinessStack')
    },
    {
      menuKey: 'myOrder',
      icon: my_orders,
      event: () => navigate('MyOrderStack')
    },
    {
      menuKey: 'accountSetting',
      icon: account_setting,
      event: () => navigate('AccountSettingStack')
    },
    {
      menuKey: 'accountSetting2',
      icon: account_setting,
      event: () => navigate('PersonalInfo')
    },
    {
      menuKey: 'faqText',
      icon: faq,
      event: () => navigate('FaqStack')
    },
    {
      menuKey: 'aboutUs',
      icon: about_us,
      event: () => navigate('AboutUsStack')
    },
    {
      label: 'SIGN OUT',
      menuKey: 'signOut',
      icon: sign_out,
      event: () => navigate('SignInStack')
    }
  ],
  schedule: [
    {
      label: 'TODAY',
      timings: [
        {
          title: '8:00 am To 9:00 am',
          isAvail: false
        },
        {
          title: '9:00 am To 10:00 am',
          isAvail: false
        },
        {
          title: '10:00 am To 11:00 am',
          isAvail: false
        },
        {
          title: '11:00 am To 12:00 am',
          isAvail: false
        },
        {
          title: '12:00 am To 1:00 pm',
          isAvail: true
        }
      ]
    },
    {
      label: 'TOMORROW',
      timings: [
        {
          title: '10 : 00 PM - 11 : 00 PM',
          isAvail: true
        },
        {
          title: '10 : 00 PM - 11 : 00 PM',
          isAvail: true
        },
        {
          title: '10 : 00 PM - 11 : 00 PM',
          isAvail: false
        },
        {
          title: '10 : 00 PM - 11 : 00 PM',
          isAvail: false
        }
      ]
    }
  ],
  messages: [
    {
      message: 'Assalam.o.Alikum',
      image: profile
    },
    {
      message: 'Walikum Assalam',
      image: secondary_avatar
    },
    {
      message: 'How are you?',
      image: profile
    },
    {
      message: 'I am good what about you?',
      image: secondary_avatar
    },
    {
      message: 'I am fine bro lets discuss rest of the thing on a call if you are available',
      image: profile
    },
    {
      message: 'I will call you later right now I am not available hope you understand that',
      image: secondary_avatar
    },
    {
      message: 'Ok sure no worries',
      image: profile
    },
    {
      message: 'Thanks',
      image: secondary_avatar
    }
  ],
  emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneRegex: /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  cnicRegex: /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/

}

export default Constants;
