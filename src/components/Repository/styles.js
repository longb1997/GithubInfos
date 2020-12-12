import { Colors } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  title: {
    fontWeight: '400',
    fontSize: 16,
  },
  description: {
    color: Colors.gray,
  },
  stargazer: {
    paddingLeft: 8,
    color: Colors.content,
  },
});
export default styles;
