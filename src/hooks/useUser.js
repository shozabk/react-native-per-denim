import {useContext} from 'react';

import {getUser, removeUser, storeUser} from '../utils/storage';
import {UserContext} from '../context';

const useUser = () => {
  const {user, setUser} = useContext(UserContext);

  const saveUser = async user => {
    setUser(user);
    await storeUser(user);
  };

  const restoreUser = async () => {
    const ruser = await getUser();
    if (!ruser) setUser(null);
    setUser(JSON.parse(ruser));
  };

  const Logout = async () => {
    setUser(null);
    await removeUser();
  };

  return {user, saveUser, Logout, restoreUser};
};

export default useUser;
