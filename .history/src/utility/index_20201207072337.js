import {PROVIDER} from '@constants/index';
import {baseURL} from '@data/api';
import images from '@resources/icons';
import haversine from 'haversine';
import moment from 'moment';
import {Dimensions, Platform, StatusBar} from 'react-native';

export const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');

export const avatarNull = images.avatar;

export const regexPassword = (password) => {
  var strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,32})',
  );
  return strongRegex.test(password);
};

export const regexEmail = (email) => {
  var strongRegex = new RegExp(
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  );
  return strongRegex.test(email);
};

export const regexName = (name) => {
  var strongRegex = new RegExp(/^[a-zA-Z0-9_.]{4,32}$/g);
  return strongRegex.test(name);
};

export function isTextEmpty(value) {
  return !value || value.length === 0;
}

export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 896 ||
      dimen.width === 896)
  );
};

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
}

export const regexYear = (name) => {
  var strongRegex = new RegExp(/^[0-9]{4,4}$/g);
  if (name != '') {
    return strongRegex.test(name);
  }
  return name;
};

export const haversineMeter = (start, end) => {
  return haversine(start, end, {unit: 'meter'});
};

export const isExist = (v) => {
  return v !== null && v !== undefined && v !== '';
};

/**
 * @author vungpv93@gmail.com
 * @param provider
 * @param providerList
 * @return {boolean}
 */
export const isProvider = (provider, providerList) => {
  if (providerList) {
    return providerList.includes(provider);
  }
  return false;
};

export const isFacebookProvider = (providerList) => {
  return isProvider(PROVIDER.FACEBOOK, providerList);
};

export const isInstagramProvider = (providerList) => {
  return isProvider(PROVIDER.INSTAGRAM, providerList);
};

/**
 * @author vungpv93@gmail.com
 * @param datetime
 * @param tz
 * @return {string}
 * @function convert datetime from local to utc
 */

export const datetimeLocalToUtc = (datetime, tz) => {
  return moment(datetime).utc().format('YYYY-MM-DD HH:mm:ss');
};

export const datetimeUtcToLocal = (datetime, tz) => {
  return moment(datetime).utcOffset(tz).format('YYYY-MM-DD HH:mm:ss');
};

export const getTimezone = () => {
  const offset = moment().utcOffset() / 60;
  return offset;
};

export const currentTime = () => {
  return moment().utc();
};

export const titleDate = (date) => {
  const current = moment().format('YYYY-MM-DD');
  if (current === date) {
    return 'Today';
  }
  return date;
};

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const avatarUrl = ({userId, userAvatar, token}) => {
  if (userAvatar) {
    return `${baseURL}user/image/${userId}/${userAvatar}?token=${token}`;
  }
  return null;
};
/**
 * @author hoanglonghaui97@gmail.com
 * @function check object is empty or not
 * @param object
 * @return bool
 */
export const isEmpty = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
