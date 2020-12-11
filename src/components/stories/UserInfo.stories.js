import React from 'react';
import { storiesOf } from '@storybook/react-native';
import UserInfo from '../UserInfo';

const dummyData = {
  username: 'longnh',
  fullname: 'Nguyen Hoang Long',
  publicRepos: 10,
  avatarUrl: 'https://avatars0.githubusercontent.com/u/48817520?v=4',
  bio: 'No matter how hard you work, someone else is working harder',
  followers: 1,
  following: 8,
  location: 'VietNam',
};

storiesOf('User Components', module).add('UserInfo', () => <UserInfo {...dummyData} />);
