import { combineReducers } from 'redux'
import popupReducer from '../popupModal/popupReducer'

const rootReducer = combineReducers({
  popupReducer:popupReducer
});
export default rootReducer;