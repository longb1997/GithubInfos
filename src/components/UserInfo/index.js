import React from 'react';
import { Text, View, Image } from 'react-native';
// import { Avatar } from 'react-native-paper';
import styles from './styles';

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
        <Image style={styles.avatar} size={24} source={{ uri: avatarUrl }} />
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
      <Text>{location}</Text>
      <Text>{publicRepos} public repositories</Text>
      <View style={styles.blockFollow}>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>{followers}</Text> followers -
          <Text style={{ fontWeight: 'bold' }}>{following}</Text> following
        </Text>
      </View>
    </View>
  );
}
