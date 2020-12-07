import {StyleSheet, Platform} from 'react-native';
import {Colors, Typography} from '@config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 0,
  },
  btnSearch: {
    backgroundColor: Colors.gray01,
    padding: 12,
    paddingLeft: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  search: {
    color: Colors.placeholder,
    fontSize: Typography.FONT_SIZE.SMALL,
    lineHeight: 19,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 19,
    color: Colors.title,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  containerSearch: {
    backgroundColor: Colors.gray01,
    padding: Platform.OS === 'ios' ? 12 : 0,
    paddingLeft: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 13,
    padding: Platform.OS === 'ios' ? 4 : 6,
  },
  containerFollow: {flex: 1, backgroundColor: Colors.white},
  safe: {
    flex: 1,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  notData: {
    flex: 1,
    textAlign: 'center',
    marginTop: '20%',
    fontSize: 17,
    color: Colors.border,
  },
  containerFollowEmpty: {
    marginTop: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pleaseIdentify: {
    marginHorizontal: '10%',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 14,
  },
  find: {
    fontSize: 18,
    lineHeight: 22,
    marginVertical: 16,
    fontWeight: '500',
  },
});

export default styles;
