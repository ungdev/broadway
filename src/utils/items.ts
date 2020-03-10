import api from './api';
import { Dispatch, Item } from '../types';
import { setItems } from '../reducers/items';

export const fetchItems = () => async (dispatch: Dispatch) => {
	const { data: items } = await api('GET', '/items');

	dispatch(setItems(items));
};

export const getItemName = (id: number, items: Array<Item>) => {
	return items.find((item) => item.id === id)?.name;
};
