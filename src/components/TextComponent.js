import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../common';

const TextComponent = ({children, style}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});

export default TextComponent;
