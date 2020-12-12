import { Colors } from '@config';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
  },
  block: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 12,
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
    marginHorizontal: 12,
    borderRadius: 4,
  },
  bio: {
    padding: 8,
  },
  blockFollow: {
    marginBottom: 12,
    marginLeft: 12,
  },
});
export default styles;
