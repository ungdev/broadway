import { Action, Item } from '../types';

export const SET_ITEMS = 'items/SET_ITEMS';

const initialState = {
	items: [],
	paymentEnabled: true,
} as { items: Array<Item>; paymentEnabled: boolean };

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
