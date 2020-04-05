import { combineReducers } from 'redux';
import { Reducer } from '../types';

import items from './items';
import login from './login';

export default combineReducers<Reducer>({ items, login });
