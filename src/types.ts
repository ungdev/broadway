import { ThunkDispatch } from 'redux-thunk';

declare global {
	interface Window {
		GA_INITIALIZED: boolean;
	}
}

// Redux
export interface State {
	items: Array<Item>;
}

export interface Action {
	type: string;
	payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type Reducer = (state: State, action: Action) => State;
export type Dispatch = ThunkDispatch<State, void, Action>;
export type GetState = () => State;

export interface Item {
	id: number;
	name: string;
	description: string;
	price: number;
}
