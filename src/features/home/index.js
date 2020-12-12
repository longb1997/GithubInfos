/* eslint-disable react-hooks/exhaustive-deps */
import { showLoading, stopLoad } from '@loading/actions';
import React, { useCallback, useState } from 'react';
import { SafeAreaView, FlatList, Text, Pressable, View } from 'react-native';
import { ActivityIndicator, TextInput, Searchbar } from 'react-native-paper';
import { connect } from 'react-redux';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

import { getInfoUserByName, getRepoByUsername } from '@data/api/github';
import { HTTP_STATUS } from '@constants/HttpStatus';
import UserInfo from 'src/components/UserInfo';

// import Icon from 'react-native-vector-icons/FontAwesome';
import LoadMoreButton from 'src/components/LoadMoreButton';
import Separator from 'src/components/Separator';
import { ScrollView } from 'react-native-gesture-handler';

// import { searchRepoByUsername } from '@feature/home/modules/actions';
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

  const Item = ({ name, stargazers_count, description }) => (
    <Pressable
      onPress={() => {
        navigate('stargazer', { username: filter.username, repoName: name });
      }}
      style={styles.item}>
      <View style={{ paddingBottom: 8 }}>
        <Text style={styles.title}>{name}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <Text style={styles.stargazer}>{stargazers_count}</Text>
    </Pressable>
  );

  const renderItem = ({ item }) => <Item {...item} />;

  // const renderInfoUser = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <TextInput
          style={{ paddingHorizontal: 16 }}
          mode="outlined"
          label="Github user"
          value={filter.username}
          onChangeText={(username) => {
            console.log(username);
            setFilter({ ...filter, username });
          }}
          onEndEditing={onSearch}
        /> */}
        {/* <Searchbar
          placeholder="Search"
          onChangeText={(username) => {
            console.log(username);
            setFilter({ ...filter, username });
          }}
          value={filter.username}
          onEndEditing={onSearch}
        /> */}
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        {infoUser?.username && <UserInfo {...infoUser} />}
        <FlatList
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
