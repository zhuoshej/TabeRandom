// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { LocationInputState, LocationInputAction } from './locationInput';

export type ReduxInitAction = { type: '@@INIT' };

export type State = {
    locationInput: LocationInputState
};

export type Action = ReduxInitAction | LocationInputAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
