// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';

import Map from './containers/Map';
import LocationInputCard from './containers/LocationInputCard';
import SquareIconButton from './components/SquareIconButton';

import type { State } from './types';

type Props = {
  isLocationInputFocused: boolean
};

const App = ({ isLocationInputFocused }: Props) => (
  <TouchableWithoutFeedback
    onPressIn={() => {
      if (isLocationInputFocused) {
        Keyboard.dismiss();
      }
    }}
  >
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Map />
      <LocationInputCard />
      <View
        style={{
          position: 'absolute',
          bottom: 41,
          right: 12,
        }}
      >
        <SquareIconButton iconName="icons-dark-localization" />
        <SquareIconButton iconName="icons-radius" />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const mapStateToProps = (state: State) => ({
  isLocationInputFocused: state.locationInput.isFocused,
});

export default connect(mapStateToProps)(App);
