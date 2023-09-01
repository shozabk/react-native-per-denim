import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Text} from '../../../components';
import {Colors} from '../../../common';

const RadioItem = ({onPress, selected, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.outerCircle}>
        {!!selected && <View style={styles.innerCircle} />}
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: Colors.BLACK,
    alignSelf: 'center',
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
  },
});

export default RadioItem;
