import React from 'react';
import {View} from 'react-native';

import {Screen, Text} from '../../../components';
import BackButton from './BackButton';
import styles from './styles';

const DetailScreen = ({route}) => {
  const {detail} = route.params;
  return (
    <Screen>
      <BackButton />
      <Text style={styles.pageTitle}>Item Page</Text>
      {Object.keys(detail).map(key => {
        return (
          <View style={styles.container}>
            <Text
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {key}:
            </Text>
            <Text style={styles.detailText}>{detail[key].toString()}</Text>
          </View>
        );
      })}
    </Screen>
  );
};

export default DetailScreen;
