// @flow
import React from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import LocationInputBox from './LocationInputBox';

import styles from '../styles/LocationInputBoard';
import { FOUCS_LOCATION_INPUT, UNFOUCS_LOCATION_INPUT } from '../actions';

import type { State, Dispatch } from '../types';

type Props = {
  isLocationInputFocused: boolean,
  onFocus: () => void,
  onBlur: () => void,
};

const TopGridientHeader = ({ isLocationInputFocused, onFocus, onBlur }: Props) => (
  <LinearGradient
    colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0.0)']}
    locations={[0.5, 1]}
    style={styles.whiteLinearGriendBoard}
  >
    <LocationInputBox
      isFocused={isLocationInputFocused}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </LinearGradient>
);

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
