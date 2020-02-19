import { Action } from '../types';

export const SET_LOGIN = 'login/SET_LOGIN';

const initialState = {
	token: null as string | null,
	permissions: null as string | null,
};

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_LOGIN:
			return action.payload;

		default:
			return state;
	}
};

export const setLogin = (login: { token: string | null; permissions: string | null }) => ({
	type: SET_LOGIN,
	payload: login,
});
