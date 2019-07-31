import { handleActions } from 'redux-actions';
import { types } from './popupActions';

const initialState = {}

const popupReducer = handleActions(
  {
    [types.GET_POPUP_PARENT_STATE_SUCCESS](state = initialState,action) {     
      return { state: action.popupParentData }
    },
    [types.GET_POPUP_STATE_SUCCESS](state = initialState,action) {
      return { state: action.popupData }
    }       
  }
  ,
  {
    state: initialState
  })
export default popupReducer;