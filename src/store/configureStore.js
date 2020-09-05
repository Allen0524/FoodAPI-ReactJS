import { createStore } from 'redux';
import {messageReducer} from '../reducers/messageReducer';

const store = createStore(messageReducer);

export {store}