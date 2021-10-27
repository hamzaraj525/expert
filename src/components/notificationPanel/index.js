import React from 'react';
import {View, ImageBackground} from 'react-native';
import {connect} from 'react-redux';

//Styles
import styles from './styles';

//Components
import {Modal, RadiusButton, PrimaryHeading} from '../index';

//Utils
import {Images, Helpers} from '../../utils';

//Constants
const {notifyBg} = Images;
const {translateLang} = Helpers;

function NotificationPanel(props) {
  const {
    isVisible = true,
    handler = () => {},
    containerStyling = {},
    data = [],
  } = props;

  const changeLanguage = (key) => {
    return translateLang(props.selectedLanguages, key);
  };

  return (
    <Modal
      onBackButtonPress={handler}
      modalStyling={styles.modalStyling}
      isVisible={isVisible}>
      <View style={[styles.container, containerStyling]}>
        <View style={styles.headerStyle}>
          <PrimaryHeading heading={changeLanguage('notificationLabel')} />
          <RadiusButton styling={styles.crossBtn} onPress={handler} />
        </View>
        <View style={styles.body}>
          <ImageBackground source={notifyBg} style={styles.cover}>
            {!data.length && (
              <PrimaryHeading
                heading={changeLanguage('noNotification')}
                styling={styles.toast}
              />
            )}
          </ImageBackground>
        </View>
      </View>
    </Modal>
  );
}

const mapStateToProps = (state) => ({
  selectedLanguages: state.setLanguageReducer.selectedLanguage,
});

export default connect(mapStateToProps)(NotificationPanel);
