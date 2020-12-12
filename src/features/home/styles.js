import { StyleSheet } from 'react-native';
import { Colors } from '@config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    color: Colors.content,
  },
});

export default styles;
