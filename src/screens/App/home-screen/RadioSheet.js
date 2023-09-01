import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors} from '../../../common';
import RadioItem from './RadioItem';

const RadioSheet = ({listName, handleListName, visible}) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      {[
        {title: 'Render Todos', value: 'todos'},
        {title: 'Render Posts', value: 'posts'},
      ].map(item => {
        return (
          <RadioItem
            title={item.title}
            key={item.title}
            selected={listName === item.value}
            onPress={() => handleListName(item.value)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 200,
    backgroundColor: Colors.BLACK,
    bottom: 0,
    borderTopColor: Colors.WHITE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RadioSheet;
