import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Text} from '.';

const Label = ({title}) => {
  return <Text style={styles.label}>{title}</Text>;
};

const styles = StyleSheet.create({
  label: {
    marginVertical: '3%',
    fontWeight: 'bold',
  },
});

export default Label;
