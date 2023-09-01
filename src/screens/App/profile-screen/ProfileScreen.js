import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button, Screen, Text} from '../../../components';
import {useUser} from '../../../hooks';

const ProfileScreen = () => {
  const {user, Logout} = useUser();
  return (
    <Screen>
      {Object.keys(user).map(key => {
        return (
          <View style={styles.container}>
            <Text>{user?.[key]}</Text>
          </View>
        );
      })}

      <Button title="Logout" onPress={Logout} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {paddingLeft: '5%', marginVertical: '5%'},
});

export default ProfileScreen;
