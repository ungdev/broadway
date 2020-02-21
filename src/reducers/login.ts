import { Action, Login } from '../types';

export const SET_LOGIN = 'login/SET_LOGIN';

const initialState = null;

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_LOGIN:
			return action.payload;

		default:
			return state;
	}
};

export const setLogin = (login: Login) => ({
	type: SET_LOGIN,
	payload: login,
});
