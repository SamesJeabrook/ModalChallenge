import { createActions } from 'redux-actions';
export const types = {
    GET_POPUP_PARENT_STATE: "GET_POPUP_PARENT_STATE",
    GET_POPUP_STATE: "GET_POPUP_STATE",
    GET_POPUP_PARENT_STATE_SUCCESS: "GET_POPUP_PARENT_STATE_SUCCESS",
    GET_POPUP_STATE_SUCCESS: "GET_POPUP_STATE_SUCCESS"
};
export const actions = createActions(...Object.keys(types).map(type => types[type]));