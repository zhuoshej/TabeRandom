// @flow
import { FOUCS_LOCATION_INPUT, UNFOUCS_LOCATION_INPUT } from '../actions';

import type { LocationInputState } from '../types/locationInput';
import type { Action } from '../types';

const locationInput = (state: LocationInputState = { isFocused: false }, action: Action) => {
  switch (action.type) {
    case FOUCS_LOCATION_INPUT:
      return { isFocused: true };
    case UNFOUCS_LOCATION_INPUT:
      return { isFocused: false };
    default:
      return state;
  }
};

export default locationInput;
