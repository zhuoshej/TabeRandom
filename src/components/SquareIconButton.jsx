// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import styles from '../styles/SquareIconButton';

import iconConfig from '../assets/json/config.json';
import colors from '../styles/colors';

const Icon = createIconSetFromFontello(iconConfig);

type Props = {
  iconName: string
};

const SquareIconButton = (props: Props) => (
  <TouchableOpacity style={styles.button}>
    <Icon name={props.iconName} size={38} color={colors.kashmirBlue} />
  </TouchableOpacity>
);

export default SquareIconButton;
