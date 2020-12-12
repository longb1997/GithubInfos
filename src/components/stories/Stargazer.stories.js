import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Stargazer from '../Stargazer';

const dummyData = {
  login: 'longb1997',
  avatar_url: 'https://avatars0.githubusercontent.com/u/48817520?v=4',
};

storiesOf('Stargazers component ', module).add('Stargazer', () => <Stargazer {...dummyData} />);
