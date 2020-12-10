import { getStargazerByRepoOfUser } from '@data/api/github';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';

export default function Stargazer() {
  const [stargazer, setStargazer] = useState([]);

  const config = {
    username: 'hngocl',
    repoName: 'BoilerplateReactNative',
    perPage: 30,
    page: 1,
  };
  const getStargazer = async (config) => {
    const response = await getStargazerByRepoOfUser(config);
    console.log('🚀 ~ file: index.js ~ line 12 ~ getStargazer ~ response', response);
    setStargazer(response?.data);
  };

  useEffect(() => {
    getStargazer(config);
  }, []);

  const Item = ({ login }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{login}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={stargazer}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
