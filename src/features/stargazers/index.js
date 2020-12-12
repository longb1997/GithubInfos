import { HTTP_STATUS } from '@constants/HttpStatus';
import { getStargazerByRepoOfUser } from '@data/api/github';
import { showLoading, stopLoad } from '@loading/actions';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { connect } from 'react-redux';
import LoadMoreButton from 'src/components/LoadMoreButton';
import Separator from 'src/components/Separator';
import Stargazer from 'src/components/Stargazer';
import styles from './styles';

function Stargazers(props) {
  const { showLoading, stopLoad, route } = props;
  const { username, repoName } = route.params;

  const [stargazer, setStargazer] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [filter, setFilter] = useState({
    username: username,
    repoName: repoName,
    perPage: 30,
    page: 1,
  });

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
        <LoadMoreButton
          containerStyle={{ alignSelf: 'center' }}
          text="Loadmore"
          type="outlined"
          onPress={handleLoadMore}
        />
      );
    } else return null;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Oops... Nothing here man!</Text>
      </View>
    );
  };

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

  const renderItem = ({ item }) => <Stargazer {...item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={stargazer}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderFooterComponent}
        ItemSeparatorComponent={() => <Separator />}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={[{ flexGrow: 1 }]}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const mapDispatch = {
  stopLoad,
  showLoading,
};

export default connect(null, mapDispatch)(Stargazers);
