/* eslint-disable react-hooks/exhaustive-deps */
import { showLoading, stopLoad } from '@loading/actions';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

// import { getRepoByUsername } from '@data/api/github';

import { searchRepoByUsername } from '@feature/home/modules/actions';
function Home(props) {
  const { repos, searchRepoByUsername } = props;
  const { navigate } = useNavigation();

  console.log({ repos });
  const [username, setUsername] = useState('');
  // const [repositories, setRepositories] = useState([]);
  const config = { username: 'longb1997' };

  // const getReposByUsername = async (config) => {
  //   const response = await getRepoByUsername(config);
  //   console.log('🚀 ~ file: index.js ~ line 20 ~ getRepoByUsername ~ response', response);
  //   setRepositories(response?.data);
  // };

  useEffect(() => {
    searchRepoByUsername(config);
  }, []);

  const Item = ({ name, stargazers_count }) => (
    <Pressable
      onPress={() => {
        navigate('stargazer');
      }}
      style={styles.item}>
      <Text style={styles.title}>
        {name} - {stargazers_count}
      </Text>
    </Pressable>
  );

  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View style={styles.container}>
      <TextInput
        label="Github user"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />
      <FlatList data={repos} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
}

const mapState = (state) => {
  return {
    repos: state.HomeReducer.repos,
  };
};

const mapDispatch = {
  stopLoad,
  showLoading,
  searchRepoByUsername,
};

export default connect(mapState, mapDispatch)(Home);
