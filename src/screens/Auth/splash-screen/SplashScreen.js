import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Screen, Text} from '../../../components';
import {Routes} from '../../../common';
import styles from './styles';
import {useUser} from '../../../hooks';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {restoreUser} = useUser();

  useEffect(() => {
    setTimeout(() => {
      restoreUser();
      navigation.navigate(Routes.LoginScreen);
    }, 3000);
  }, []);

  return (
    <Screen>
      <Text style={styles.logo}>Per Diem</Text>
    </Screen>
  );
};

export default SplashScreen;
