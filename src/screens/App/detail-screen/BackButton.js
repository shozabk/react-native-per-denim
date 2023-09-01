import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Text} from '../../../components';

const BackButton = () => {
  const navigation = useNavigation();
  const handleBackPress = () => navigation.goBack();

  return (
    <TouchableOpacity onPress={handleBackPress} style={styles.container}>
      <Text>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: '5%',
  },
});

export default BackButton;
