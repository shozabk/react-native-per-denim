import AsyncStorage from '@react-native-async-storage/async-storage';

const UserKey = 'user_key';

//User
const storeUser = async user => {
  try {
    await removeUser();
    await AsyncStorage.setItem(UserKey, JSON.stringify(user));
  } catch (error) {
    console.log('Error saving user.');
  }
};

const getUser = async () => {
  try {
    return await AsyncStorage.getItem(UserKey);
  } catch (error) {
    console.log('Error getting the user');
  }
};

const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(UserKey);
  } catch (error) {
    console.log('Error deleting the user');
  }
};

export {storeUser, removeUser, getUser};
