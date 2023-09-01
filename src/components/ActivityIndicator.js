import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Colors} from '../common';
import {Text} from '.';

const ActivityIndicator = ({visible = false}) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.laoder}>Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.BLACK,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  laoder: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ActivityIndicator;
