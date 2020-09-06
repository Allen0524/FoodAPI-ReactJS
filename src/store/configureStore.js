import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {messageReducer} from '../reducers/messageReducer';
import mySaga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(messageReducer, applyMiddleware(sagaMiddleware));


export {store}

sagaMiddleware.run(mySaga);