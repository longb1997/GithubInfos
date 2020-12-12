/* eslint-disable react-hooks/exhaustive-deps */
import { HTTP_STATUS } from '@constants/HttpStatus';
import { getInfoUserByName, getRepoByUsername } from '@data/api/github';
import { showLoading, stopLoad } from '@loading/actions';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import LoadMoreButton from 'src/components/LoadMoreButton';
import Repository from 'src/components/Repository';
import Separator from 'src/components/Separator';
import UserInfo from 'src/components/UserInfo';
import styles from './styles';

function Home(props) {
  const { showLoading, stopLoad } = props;
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const [infoUser, setInfoUser] = useState();
  const [repositories, setRepositories] = useState([]);
  const [filter, setFilter] = useState({ username: '', page: 1, perPage: 30 });

  const onSearch = async () => {
    if (filter.username && filter.username.length) {
      showLoading();
      setFilter({ ...filter, page: 1, size: 10 });
      getInfoUser(filter.username);
      const response = await getRepoByUsername(filter);
      if (response.data.length < filter.perPage) {
        setIsEnd(true);
      }
      if (response.status === HTTP_STATUS.OK) {
        setRepositories(response.data);
        stopLoad();
      } else {
        stopLoad();
        setRepositories([]);
      }
      stopLoad();
    } else {
      setRepositories([]);
    }
  };

  const getInfoUser = async (config) => {
    const response = await getInfoUserByName(config);
    const { data } = response;
    setInfoUser({
      ...infoUser,
      username: data.login,
      fullname: data.name,
      publicRepos: data.public_repos,
      avatarUrl: data.avatar_url,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      location: data.location,
    });
  };

  const renderFooterComponent = () => {
    if (loading) {
      return (
        <ActivityIndicator
          animating={loading}
          color={'red'}
          style={{ color: '#000', paddingBottom: 5 }}
        />
      );
    } else if (!isEnd && repositories.length) {
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

  const handleLoadMore = useCallback(async () => {
    if (loading) return;
    const newFilter = { ...filter, page: filter.page + 1 };
    setLoading(true);
    setFilter(newFilter);

    const response = await getRepoByUsername(newFilter);
    if (response.data.length <= 0) {
      setLoading(false);
      setIsEnd(true);
    }
    if (response.data.length < filter.perPage) {
      setIsEnd(true);
    }
    if (response.status === HTTP_STATUS.OK) {
      if (typeof response.data !== 'undefined' && response.data && response.data.length) {
        setRepositories(repositories.concat(response.data));
      }
      setLoading(false);
    } else {
      setLoading(false);
      setIsEnd(true);
    }
    setLoading(false);
    return true;
  });

  const navigationToStargazer = ({ name }) => {
    navigate('stargazer', { username: filter.username, repoName: name });
  };

  const renderItem = ({ item }) => (
    <Repository {...item} onPress={() => navigationToStargazer(item)} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Searchbar
          placeholder="Search"
          onChangeText={(username) => {
            console.log(username);
            setFilter({ ...filter, username });
          }}
          value={filter.username}
          onEndEditing={onSearch}
        />
        {infoUser?.username && <UserInfo {...infoUser} />}
        <FlatList
          scrollEnabled={false}
          data={repositories}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          // ListHeaderComponent={infoUser?.username && <UserInfo {...infoUser} />}
          ListFooterComponent={renderFooterComponent}
          ItemSeparatorComponent={() => <Separator style={{ marginLeft: 0 }} />}
          contentContainerStyle={{ backgroundColor: 'white', marginTop: 16 }}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
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
};

export default connect(mapState, mapDispatch)(Home);
