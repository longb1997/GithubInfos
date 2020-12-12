import { StyleSheet } from 'react-native';
import { Colors } from '@config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
  },
  item: {
    // backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
