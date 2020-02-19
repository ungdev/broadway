import { Action, Item } from '../types';

export const SET_ITEMS = 'items/SET_ITEMS';

const initialState = [] as Array<Item>;

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case SET_ITEMS:
			return action.payload;

		default:
			return state;
	}
};

export const setItems = (items: Item[]) => ({
	type: SET_ITEMS,
	payload: items,
});
