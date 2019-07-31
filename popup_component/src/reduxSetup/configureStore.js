import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'
import rootSaga from '../popupModal/popupSaga';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store
}