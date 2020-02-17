import { combineReducers } from 'redux';
import { Reducer } from '../types';

import items from './items';

export default combineReducers<Reducer>({ items });
