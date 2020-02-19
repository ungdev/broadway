import { ThunkDispatch } from 'redux-thunk';

declare global {
	interface Window {
		GA_INITIALIZED: boolean;
	}
}

export type Login = { token: string; permissions: string } | false;

export interface Item {
	id: number;
	name: string;
	description: string;
	price: number;
}

export interface Ticket {
	firstname: string;
	lastname: string;
	email: string;
	type: string;
}

export interface User {
	id: string;
	firstname: string;
	lastname: string;
	isScanned: boolean;
	itemId: number;
}

export interface FetchedOrder {
	id: string;
	representation: number;
	firstname: string;
	lastname: string;
	email: string;
	users: Array<User>;
	paidAt: string;
}

// Redux
export interface State {
	items: Array<Item>;
	login: Login;
}

export interface Action {
	type: string;
	payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type Reducer = (state: State, action: Action) => State;
export type Dispatch = ThunkDispatch<State, void, Action>;
export type GetState = () => State;
