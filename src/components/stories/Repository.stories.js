import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Repository from '../Repository';

const dummyData = {
  name: 'RNBoilerplate',
  stargazers_count: 1,
  description: 'boilerplate for RN project',
  onPress: () => console.log('pressed items'),
};

storiesOf('Repos Components', module).add('Repository Item', () => <Repository {...dummyData} />);
