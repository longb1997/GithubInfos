import { Colors } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    // backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  mainName: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: '400',
    paddingLeft: 12,
  },
});
export default styles;
