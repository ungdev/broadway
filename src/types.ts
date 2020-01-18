import { ThunkDispatch } from 'redux-thunk';

declare global {
	interface Window {
		GA_INITIALIZED: boolean;
	}
}

// Redux
export interface State {
	tmp: number;
}

export interface Action {
	type: string;
	payload?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export type Dispatch = ThunkDispatch<State, void, Action>;
export type GetState = () => State;
