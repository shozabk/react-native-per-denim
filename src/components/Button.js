import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '.';
import {Colors} from '../common';

const Button = ({title = '', onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container, ...style}}>
      <Text style={styles.title}> {title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    width: '50%',
    borderRadius: 10,
    height: 50,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
});

export default Button;
