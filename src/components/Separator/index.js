import React from 'react';
import { View } from 'react-native';

const defaultStyle = {
  height: 1,
  width: '100%',
  backgroundColor: '#CED0CE',
  marginLeft: '20%',
};

const Separator = ({ style }) => {
  return <View style={[defaultStyle, style]} />;
};

export default Separator;
