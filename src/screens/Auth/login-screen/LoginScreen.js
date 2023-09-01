import React, {useState} from 'react';
import {View} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';

import {
  Input,
  Label,
  Screen,
  Text,
  Button,
  showErrorMessage,
} from '../../../components';
import styles from './styles';
import {useUser} from '../../../hooks';
import {webClientId, iosClientId} from '../../../config/Env';

GoogleSignin.configure({
  webClientId: webClientId,
  offlineAccess: true,
  iosClientId: iosClientId,
});

const LoginScreen = () => {
  const [state, setState] = useState({email: null, password: null});
  const {saveUser} = useUser();

  const handleLogin = () => {
    const {email, password} = state;
    if (!email) {
      return showErrorMessage('Enter an email');
    } else if (!password) {
      return showErrorMessage('Enter password');
    } else if (email !== 'johndoe@gmail.com' || password !== '12345678') {
      return showErrorMessage('Wrong email or password');
    }

    saveUser({name: 'John Doe', email: 'johndoe@gmail.com'});
  };

  const handleGooglePress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      saveUser(userInfo);
      await GoogleSignin.signOut();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Label title="Email" />
        <Input
          placeholder="Add email address"
          keyboardType="email-address"
          value={state.email}
          onChangeText={text => setState({...state, email: text})}
        />
        <Label title="Password" />
        <Input
          placeholder="Add password"
          secureTextEntry
          value={state.password}
          onChangeText={text => setState({...state, password: text})}
        />

        <Button onPress={handleLogin} title="Sign in" />

        <Text style={styles.option}>----------OR--------</Text>
        <GoogleSigninButton
          style={styles.googleButton}
          onPress={handleGooglePress}
        />
      </View>
    </Screen>
  );
};

export default LoginScreen;
