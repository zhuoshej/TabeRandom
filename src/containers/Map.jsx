import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import customMapStyle from '../assets/json/GoogleMapStyle.json';

const Map = () => (
  <MapView
    provider={PROVIDER_GOOGLE}
    style={{ ...StyleSheet.absoluteFillObject }}
    initialRegion={{
      latitude: 40.6974881,
      longitude: -73.979681,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }}
    customMapStyle={customMapStyle}
  />
);

export default Map;
