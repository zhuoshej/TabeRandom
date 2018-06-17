// @flow
import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import styles from '../styles/LocationInputBoard';
import colors from '../styles/colors';

import iconConfig from '../assets/json/config.json';


const Icon = createIconSetFromFontello(iconConfig);

type Props = {
  isFocused: boolean,
  onFocus: () => void,
  onBlur: () => void,
};

class LocationInputBox extends Component<Props> {
  LocationSearchBox: ?HTMLInputElement;

  renderIcon(isFocused: boolean) {
    if (!isFocused) {
      // if (this.LocationSearchBox) { this.LocationSearchBox.blur(); }
      return (
        <TouchableOpacity
          style={styles.inputFieldIconContainer}
          onPress={() => this.LocationSearchBox && this.LocationSearchBox.focus()}
        >
          <Icon name="icons-dark-menu" size={24} color={colors.kashmirBlue} />
        </TouchableOpacity>
      );
    }
    // if (this.LocationSearchBox) { this.LocationSearchBox.focus(); }
    return (
      <TouchableOpacity
        style={styles.inputFieldIconContainer}
        onPress={() => this.LocationSearchBox && this.LocationSearchBox.blur()}
      >
        <Icon name="icons-dark-back" size={24} color={colors.kashmirBlue} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        style={styles.inputFieldContainer}
      >
        {this.renderIcon(this.props.isFocused)}
        <TextInput
          style={styles.inputFieldTextField}
          placeholder="Where you want to start?"
          placeholderTextColor={colors.shipCove}
          ref={component => this.LocationSearchBox = component}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          keyboardAppearance="dark"
        />
      </View>
    );
  }
}

export default LocationInputBox;
