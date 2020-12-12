import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Repository = ({ name, stargazers_count, description, onPress }) => (
  <Pressable onPress={onPress} style={styles.item}>
    <View style={{ paddingBottom: 8 }}>
      <Text style={styles.title}>{name}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="star-outline" color="#f9ca24" size={13} />
      <Text style={styles.stargazer}>{stargazers_count}</Text>
    </View>
  </Pressable>
);

export default Repository;
