import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Colors} from '../common';

const Input = props => {
  return (
    <TextInput
      style={styles.container}
      placeholderTextColor={Colors.WHITE}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 40,
    paddingHorizontal: '5%',
    marginVertical: 10,
    color: Colors.WHITE,
  },
});

export default Input;
