import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../types/registerTypes';

//Service
import {AuthApi} from '../../services';

//Utils
import {Navigator, Helpers} from '../../utils';

//Constant
const {navigate} = Navigator;
const {register} = AuthApi;
const {successToast, errorToast, warningToast} = Helpers;

const start = () => ({
  type: REGISTER_START,
});

const success = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

const failure = () => ({
  type: REGISTER_FAILURE,
});

export const registerAction = (payload, authType = true) => {
  return async (dispatch, getState) => {
    if (getState().isLoading) return;
    dispatch(start());
    try {
      if (authType) {
        const response = await register(payload);
        const result = await response.text();
        const {message, data, code} = result;

        if (code === 200) {
          dispatch(
            success({
              user: data.user,
            }),
          );
          successToast('Success', message);
          navigate('SignInStack');
        } else {
          warningToast('Warning', message);
          dispatch(failure());
          return code;
        }
      } else {
        dispatch(
          success({
            user: {},
          }),
        );
        navigate('AuthStack');
      }
    } catch (error) {
      errorToast('Error', error.toString());
      dispatch(failure());
    }
  };
};
