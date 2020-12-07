/* eslint-disable react-hooks/exhaustive-deps */
import {showLoading, stopLoad} from '@loading/actions';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

function Home(props) {
  const {navigation} = props;
  const {stopLoad, showLoading} = props;
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnSearch}>
        <Text style={styles.search}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatch = {
  stopLoad,
  showLoading,
};

export default connect(null, mapDispatch)(Home);
