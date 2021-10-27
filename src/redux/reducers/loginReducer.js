import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../types/loginTypes';

import {
    IMAGE_UPLOAD_START,
    IMAGE_UPLOAD_FAILURE
} from '../types/imageUploadTypes'

import {
    UPDATE_PROFILE_START,
    UPDATE_PROFILE_FAILURE
} from '../types/updateProfileTypes'

import {
    UPDATE_EXPERT_PROFILE_START,
    UPDATE_EXPERT_PROFILE_FAILURE
} from '../types/updateExpertProfileTypes'

import {
    STATUS_START,
    STATUS_SUCCESS,
    STATUS_FAILURE
} from '../types/statusTypes'

const initialState = {
    isLoading: false,
    user: {},
    isImageLoading: false,
    isUpdateProfileLoading: false,
    isUpdateExpertProfileLoading: false,
    isDisable: false,
    isStatus: 0
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return { ...state, user: {}, isLoading: true, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false };
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload.user, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false };
        case LOGIN_FAILURE:
            return { ...state, user: {}, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false };
        case IMAGE_UPLOAD_START:
            return { ...state, isLoading: false, isImageLoading: true, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false }
        case IMAGE_UPLOAD_FAILURE:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false }
        case UPDATE_PROFILE_START:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: true, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false }
        case UPDATE_PROFILE_FAILURE:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false }
        case UPDATE_EXPERT_PROFILE_START:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: true, isStatus: 0, isDisable: false }
        case UPDATE_EXPERT_PROFILE_FAILURE:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false }
        case STATUS_START:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: true }
        case STATUS_SUCCESS:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: action.payload.status, isDisable: false }
        case STATUS_FAILURE:
            return { ...state, isLoading: false, isImageLoading: false, isUpdateProfileLoading: false, isUpdateExpertProfileLoading: false, isStatus: 0, isDisable: false }
        default:
            return state;
    }
};

export default loginReducer;