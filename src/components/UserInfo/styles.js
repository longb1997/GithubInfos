import { Colors } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  block: {
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  blockName: {
    justifyContent: 'center',
    paddingLeft: 12,
  },
  mainName: {
    fontSize: 24,
    color: Colors.black,
    fontWeight: '600',
  },
  secondName: {
    fontSize: 16,
    color: Colors.gray,
  },
  blockBio: {
    backgroundColor: Colors.gray01,
    marginVertical: 12,
  },
  bio: {
    padding: 8,
  },
  blockFollow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
