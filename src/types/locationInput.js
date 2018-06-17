// @flow
import { FOUCS_LOCATION_INPUT, UNFOUCS_LOCATION_INPUT } from '../actions';

export type LocationInputState = {
  +isFocused: boolean
};

export type LocationInputAction =
  | { type: typeof FOUCS_LOCATION_INPUT }
  | { type: typeof UNFOUCS_LOCATION_INPUT };
