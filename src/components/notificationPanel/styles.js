import {StyleSheet} from 'react-native';

//Theme
import {Color, Metrics} from '../../theme';

//Constants
const {modalHeaderBg, toastColor, white} = Color;
const {screenWidth, screenHeight} = Metrics;

const styles = StyleSheet.create({
  modalStyling: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    minHeight: screenHeight * 0.55,
    maxHeight: screenHeight * 0.55,
    backgroundColor: white,
    borderRadius: 3,
  },
  headerStyle: {
    width: '100%',
    height: 50,
    backgroundColor: modalHeaderBg,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  crossBtn: {
    width: 35,
    height: 35,
    position: 'absolute',
    right: 5,
    top: -15,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toast: {
    color: toastColor,
    fontSize: screenWidth * 0.042,
  },
});

export default styles;
