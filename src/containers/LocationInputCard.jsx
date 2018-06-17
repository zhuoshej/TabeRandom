// @flow
import { connect } from 'react-redux';

import TopGridientHeader from '../components/TopGridientHeader';

import { FOUCS_LOCATION_INPUT, UNFOUCS_LOCATION_INPUT } from '../actions';

import type { State, Dispatch } from '../types';

const mapStateToProps = (state: State) => ({
  isLocationInputFocused: state.locationInput.isFocused,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onFocus: () => dispatch({
    type: FOUCS_LOCATION_INPUT,
  }),
  onBlur: () => dispatch({
    type: UNFOUCS_LOCATION_INPUT,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopGridientHeader);
