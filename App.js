import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import {AuthNavigator, AppNavigator} from './src/navigators';
import {UserContext} from './src/context';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        {user ? <AppNavigator /> : <AuthNavigator />}
        <FlashMessage
          position={Platform.OS === 'android' ? 'center' : 'top'}
          style={Platform.OS === 'android' ? {marginBottom: '170%'} : {}}
        />
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
