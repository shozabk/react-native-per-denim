import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ActivityIndicator, Screen, Text} from '../../../components';
import {getGreeting, getPosts, getTodos} from './helper';
import {Routes} from '../../../common';
import RadioSheet from './RadioSheet';
import {useUser} from '../../../hooks';

const HomeScreen = () => {
  const [listName, setListName] = useState('todos');
  const [list, setList] = useState([]);
  const [showSheet, setShowSheet] = useState(false);
  const {user} = useUser();
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);

      let data;
      if (listName === 'todos') data = await getTodos();
      else data = await getPosts();

      setList(data);
      setLoader(false);
    })();
  }, [listName]);

  useEffect(() => {
    setShowSheet(true);

    return () => setShowSheet(false);
  }, []);

  const onListNameUpdate = name => {
    setListName(name);
    setShowSheet(false);
  };

  return (
    <>
      <ActivityIndicator visible={loader} />
      <Screen style={styles.container}>
        <Text style={styles.welcomeText}>
          {getGreeting()} - {user?.name}
        </Text>
        <FlatList
          data={list}
          contentContainerStyle={{paddingHorizontal: '5%'}}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Routes.DetailScreen, {detail: item})
                }>
                <Text style={styles.listTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
        <RadioSheet
          visible={showSheet}
          listName={listName}
          handleListName={onListNameUpdate}
        />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  listTitle: {
    alignSelf: 'center',
    marginBottom: '5%',
    textAlign: 'center',
  },
  welcomeText: {
    alignSelf: 'center',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
