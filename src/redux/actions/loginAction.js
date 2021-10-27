import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../types/loginTypes';

//Service
import {AuthApi} from '../../services';

//Utils
import {Navigator, Helpers} from '../../utils';

//Constant
const {navigate} = Navigator;
const {login} = AuthApi;
const {successToast, errorToast, warningToast} = Helpers;

const start = () => ({
  type: LOGIN_START,
});

const success = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const failure = () => ({
  type: LOGIN_FAILURE,
});

export const loginAction = (payload, authType = true) => {
  return async (dispatch, getState) => {
    if (getState().isLoading) return;
    dispatch(start());
    try {
      if (authType) {
        const response = await login(payload);
        const result = await response.json();
        const {message, data, code} = result;

        if (code === 200) {
          dispatch(
            success({
              user: data.user,
            }),
          );
          successToast('Login Successfull', message);
          navigate(
            data.user.type === 'expert'
              ? 'MainStackExpert'
              : 'MainStackCustomer',
          );
        } else {
          warningToast('Warning', message);
          dispatch(failure());
          return code;
        }
      } else {
        successToast('Success', 'Logout Successfully!');
        dispatch(
          success({
            user: {},
          }),
        );
        navigate('SignInStack');
      }
    } catch (error) {
      errorToast('Error', error.toString());
      dispatch(failure());
    }
  };
};
