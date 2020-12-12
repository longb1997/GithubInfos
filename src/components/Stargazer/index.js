import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const Stargazer = ({ login, avatar_url }) => (
  <>
    <View style={styles.item}>
      <Image source={{ uri: avatar_url }} style={styles.avatar} />
      <Text style={styles.mainName}>{login}</Text>
    </View>
  </>
);
export default Stargazer;
