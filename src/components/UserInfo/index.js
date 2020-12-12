import React from 'react';
import { Text, View, Image } from 'react-native';
// import Separator from '../Separator';
// import { Avatar } from 'react-native-paper';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function UserInfo({
  fullname,
  username,
  publicRepos,
  avatarUrl,
  bio,
  followers,
  following,
  location,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Image style={styles.avatar} size={22} source={{ uri: avatarUrl }} />
        <View style={styles.blockName}>
          <Text style={styles.mainName}>{fullname}</Text>
          <Text style={styles.secondName}>{username}</Text>
        </View>
      </View>
      {bio && (
        <View style={styles.blockBio}>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      )}
      <View style={styles.blockFollow}>
        <View style={styles.row}>
          <Icon name="ios-location-outline" size={18} style={styles.icon} />
          <Text>{location}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="ios-documents-outline" size={18} style={styles.icon} />
          <Text>{publicRepos} public repositories</Text>
        </View>
        <View style={styles.row}>
          <Icon name="md-man-outline" size={18} style={styles.icon} />
          <Text>
            <Text style={{ fontWeight: 'bold' }}>{followers}</Text> followers -
            <Text style={{ fontWeight: 'bold' }}> {following}</Text> following
          </Text>
        </View>
      </View>
    </View>
  );
}
