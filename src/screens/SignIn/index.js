import React, {useState} from 'react';
import {ToastAndroid, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Actions
import * as AllActions from '../../redux/actions';

//Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//Styling
import styles from './styles';

//Components
import {
  Scrollbar,
  ImageView,
  PrimaryButton,
  PrimaryHeading,
  Input,
  RadiusButton,
} from '../../components';

//Utils
import {Images, Navigator, Helpers} from '../../utils';

//Constants
const {hide, show} = Images;
const {navigate} = Navigator;
const {translateLang, setFormdata, validatePhone, warningToast} = Helpers;

function SignIn(props) {
  const [passVisibility, togglePassVisibility] = useState(false);
  const [phone, handlePhone] = useState('');
  const [password, handlePassword] = useState('');

  const nextScreen = (route) => {
    navigate(route);
  };

  const changeLanguage = (key) => {
    return translateLang(props.selectedLanguages, key);
  };

  const validateToast = (error) => {
    warningToast('Warning!', error);
  };

  const handleLogin = async () => {
    const {
      actions: {loginAction},
    } = props;
    if (!phone) return validateToast('Enter mobile number!');
    if (!validatePhone(phone)) return validateToast('Invalid phone number!');
    if (!password) return validateToast('Enter password!');
    const payload = {
      phone,
      password,
    };
    const formData = setFormdata(payload);
    const response = await loginAction(formData);
    if (!response) return flushState();
  };

  const flushState = () => {
    handlePhone('');
    handlePassword('');
    // handleConfirmPassword('');
  };

  const {
    loginReducer: {isLoading},
  } = props;

  return (
    <View style={styles.container}>
      <Scrollbar>
        <ImageView containerStyling={styles.img} />
        <View style={styles.inputsContainer}>
          <Input
            keyboardType="numeric"
            containerStyling={styles.inputs}
            value={phone}
            onChangeText={(text) => handlePhone(text)}
            placeholder={changeLanguage('mobileNumberText')}
          />
          <Input
            secureTextEntry={passVisibility ? false : true}
            placeholder={changeLanguage('passwordText')}
            containerStyling={styles.inputs}
            isIcon={true}
            iconImage={passVisibility ? hide : show}
            iconHandler={() => togglePassVisibility(!passVisibility)}
            value={password}
            onChangeText={(text) => handlePassword(text)}
          />
        </View>
        <PrimaryButton
          label={changeLanguage('signInButtonText')}
          styling={styles.btn}
          textStyling={styles.btnText}
          onPress={handleLogin}
          loading={isLoading}
          disabled={isLoading}
        />
        <View style={styles.descriptionContainer}>
          <PrimaryHeading
            heading={changeLanguage('signInText')}
            styling={styles.descriptionPrimary}
          />
          <PrimaryHeading
            heading={`${changeLanguage('signUpButtonText')} !`}
            styling={styles.descriptionSecondary}
            onPress={() => nextScreen('SignUpStack')}
          />
        </View>
        <View style={[styles.descriptionContainer, styles.signupContainer]}>
          <PrimaryHeading
            heading={changeLanguage('registerAsProvider')}
            styling={styles.descriptionPrimary}
            onPress={() => navigate('Home')}
          />
        </View>
        <View style={styles.btnWrapper}>
          <RadiusButton
            styling={styles.facebook}
            children={<FontAwesome name="facebook" style={styles.icon} />}
          />
          <RadiusButton
            styling={styles.google}
            children={<AntDesign name="google" style={styles.icon} />}
          />
        </View>
      </Scrollbar>
    </View>
  );
}

const mapStateToProps = (state) => ({
  selectedLanguages: state.setLanguageReducer.selectedLanguage,
  loginReducer: state.loginReducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AllActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
