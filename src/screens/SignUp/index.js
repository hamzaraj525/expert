import React, {useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Actions
import * as AllActions from '../../redux/actions';

//Styling
import styles from './styles';

//Components
import {
  Scrollbar,
  ImageView,
  PrimaryHeading,
  Input,
  Checkbox,
  PrimaryButton,
} from '../../components';

//Theme
import {Color} from '../../theme';

//Utils
import {Helpers, Navigator} from '../../utils';

//Constant
const {secondary} = Color;
const {navigate} = Navigator;
const {translateLang, setFormdata, validatePhone, warningToast} = Helpers;

function SignUp(props) {
  const [fname, handleFName] = useState('');
  const [lname, handleLName] = useState('');
  const [phone, handlephone] = useState('');
  const [password, handlePassword] = useState('');
  const [confirmPassword, handleConfirmPassword] = useState('');
  const [register, handleRegister] = useState('');
  const [privacy, handlePrivacy] = useState(false);

  const nextScreen = (route) => {
    navigate(route);
  };

  const passwordStrength = (validation = '') => {
    return (
      <PrimaryHeading
        styling={styles.passwordLabel}
        heading={
          !!validation.length &&
          (validation.length > 5
            ? changeLanguage('strongPasssword')
            : changeLanguage('weakPassword'))
        }
      />
    );
  };

  const changeLanguage = (key) => {
    return translateLang(props.selectedLanguages, key);
  };

  const validateToast = (error) => {
    warningToast('Warning!', error);
  };

  const handleSignup = async () => {
    const {
      actions: {registerAction},
    } = props;
    try {
      if (!fname) return validateToast('Enter first name!');
      if (!lname) return validateToast('Enter last name!');
      if (!phone) return validateToast('Enter mobile number!');
      if (!validatePhone(phone)) return validateToast('Invalid phone number!');
      if (!password) return validateToast('Enter password!');
      if (!confirmPassword) return validateToast('Enter confirm password!');
      if (password !== confirmPassword)
        return validateToast("Passwords didn't matched!");
      if (!privacy) return validateToast('Accept privacy policy!');

      const payload = {
        fname,
        lname,
        phone,
        password,
      };

      const formData = setFormdata(payload);
      const response = await registerAction(formData);
      if (!response) return flushState();
    } catch (error) {
      console.log('handleSignup -> error', error);
    }
  };

  const flushState = () => {
    handlephone('');
    handlePassword('');
    handleConfirmPassword('');
  };

  const {
    registerReducer: {isLoading},
  } = props;

  return (
    <View style={styles.container}>
      <Scrollbar>
        <ImageView styling={styles.img} />
        <PrimaryHeading styling={styles.heading} />
        <View style={styles.inputsContainer}>
          <Input
            containerStyling={styles.inputs}
            placeholder={changeLanguage('firstName')}
            value={fname}
            inputStyling={styles.emailInput}
            onChangeText={(text) => handleFName(text)}
          />
          <Input
            containerStyling={styles.inputs}
            placeholder={changeLanguage('lastName')}
            value={lname}
            inputStyling={styles.emailInput}
            onChangeText={(text) => handleLName(text)}
          />
          <Input
            containerStyling={styles.inputs}
            keyboardType="numeric"
            placeholder={changeLanguage('mobileNumberText')}
            value={phone}
            inputStyling={styles.emailInput}
            onChangeText={(text) => handlephone(text)}
          />
          <Input
            containerStyling={styles.inputs}
            placeholder={changeLanguage('passwordText')}
            isIcon={true}
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => handlePassword(text)}
            renderComponent={() => passwordStrength(password)}
            containerStyling={styles.passwordsInputsContainer}
            inputStyling={styles.passwordsInput}
          />
          <Input
            containerStyling={styles.inputs}
            placeholder={changeLanguage('confirmPasswordText')}
            isIcon={true}
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => handleConfirmPassword(text)}
            renderComponent={() => passwordStrength(confirmPassword)}
            containerStyling={styles.passwordsInputsContainer}
            inputStyling={styles.passwordsInput}
          />
        </View>
        {/* <View style={styles.checkBoxContainer}>
                <Checkbox styling={styles.checkboxes}
                    isChecked={register === 'individual'}
                    handleCheck={() => handleRegister('individual')}
                    label={changeLanguage('registerIndividual')} />
                <Checkbox styling={styles.checkboxes}
                    handleCheck={() => handleRegister('online')}
                    isChecked={register === 'online'}
                    label={changeLanguage('registerOnline')}
                />
                <Checkbox styling={styles.checkboxes}
                    handleCheck={() => handleRegister('provider')}
                    isChecked={register === 'provider'}
                    label={changeLanguage('registerProvider')}
                />
            </View> */}
        <PrimaryButton
          label={changeLanguage('signUpButtonText')}
          loaderColor={secondary}
          loading={isLoading}
          disabled={isLoading}
          onPress={handleSignup}
          styling={styles.btn}
          textStyling={styles.btnText}
          rippleColor={secondary}
        />
        <Checkbox
          isChecked={privacy}
          handleCheck={() => handlePrivacy(!privacy)}
          label={changeLanguage('privacyPolicy')}
          styling={styles.privacyCheckbox}
          textStyling={styles.privacyText}
        />
        <View style={styles.signUpFooter}>
          <PrimaryHeading
            heading={changeLanguage('signUpText')}
            styling={styles.descriptionPrimary}
          />
          <PrimaryHeading
            heading={`${changeLanguage('login')}!`}
            styling={styles.descriptionSecondary}
            onPress={() => nextScreen('SignInStack')}
          />
        </View>
      </Scrollbar>
    </View>
  );
}

const mapStateToProps = (state) => ({
  selectedLanguages: state.setLanguageReducer.selectedLanguage,
  registerReducer: state.registerReducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(AllActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
