import { State } from './types';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

export const initStore = (initialState: State) => {
	const logger = createLogger({ collapsed: true });
	return createStore(reducer, initialState, applyMiddleware(thunk, logger));
};
