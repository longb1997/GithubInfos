import { getStargazerByRepoOfUser } from '@data/api/github';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { showLoading, stopLoad } from '@loading/actions';

import styles from './styles';

function Stargazer(props) {
  const [stargazer, setStargazer] = useState([]);
  const { showLoading, stopLoad } = props;
  const config = {
    username: 'hngocl',
    repoName: 'BoilerplateReactNative',
    perPage: 30,
    page: 1,
  };
  const getStargazer = async (config) => {
    showLoading();
    const response = await getStargazerByRepoOfUser(config);
    console.log('🚀 ~ file: index.js ~ line 12 ~ getStargazer ~ response', response);
    setStargazer(response?.data);
    stopLoad();
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
const mapState = () => {
  return {};
};

const mapDispatch = {
  stopLoad,
  showLoading,
};

export default connect(mapState, mapDispatch)(Stargazer);
