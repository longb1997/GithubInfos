import { getStargazerByRepoOfUser } from '@data/api/github';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { showLoading, stopLoad } from '@loading/actions';

import styles from './styles';
import { ActivityIndicator, Button, Colors } from 'react-native-paper';
import { HTTP_STATUS } from '@constants/HttpStatus';

function Stargazer(props) {
  const [stargazer, setStargazer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [filter, setFilter] = useState({
    username: 'hngocl',
    repoName: 'BoilerplateReactNative',
    perPage: 30,
    page: 1,
  });

  const { showLoading, stopLoad } = props;

  const getStargazer = async (config) => {
    showLoading();
    const response = await getStargazerByRepoOfUser(config);
    console.log('🚀 ~ file: index.js ~ line 12 ~ getStargazer ~ response', response);
    if (response.data.length < filter.perPage) {
      setIsEnd(true);
    }
    setStargazer(response?.data);
    stopLoad();
  };

  useEffect(() => {
    getStargazer(filter);
  }, []);

  const renderFooterComponent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          animating={loading}
          color={Colors.red800}
          style={{ color: '#000', paddingBottom: 5 }}
        />
      );
    } else if (!isEnd) {
      return (
        <Button mode="contained" onPress={handleLoadMore}>
          Load more
        </Button>
      );
    } else return null;
  };

  const Item = ({ login }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{login}</Text>
    </View>
  );

  const handleLoadMore = useCallback(async () => {
    if (loading) return;
    const newFilter = { ...filter, page: filter.page + 1 };
    setLoading(true);
    setFilter(newFilter);

    const response = await getStargazerByRepoOfUser(newFilter);
    if (response.data.length <= 0) {
      setLoading(false);
      setIsEnd(true);
    }
    if (response.data.length < filter.perPage) {
      setIsEnd(true);
    }
    if (response.status === HTTP_STATUS.OK) {
      if (typeof response.data !== 'undefined' && response.data && response.data.length) {
        setStargazer(stargazer.concat(response.data));
      }
      setLoading(false);
    } else {
      setLoading(false);
      setIsEnd(true);
    }
    setLoading(false);
    return true;
  });

  const renderItem = ({ item }) => <Item {...item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={stargazer}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderFooterComponent}
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
