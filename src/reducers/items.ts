import api from '../utils/api';
import { Action, Item, Dispatch } from '../types';

export const SET_ITEMS = 'ITEMS/SET_ITEMS';

const initialState = [] as Array<Item>;

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_ITEMS:
			return action.payload;

		default:
			return state;
	}
};

const setItems = (items: Item[]) => ({
	type: SET_ITEMS,
	payload: items,
});

export const fetchItems = () => async (dispatch: Dispatch) => {
	const { data: items } = await api('GET', '/items');

	dispatch(setItems(items));
};
