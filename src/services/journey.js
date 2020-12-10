import moment from 'moment';
import _ from 'lodash';

import { getTimezone } from '@utility';

export const asArray = (journeys) => {
  try {
    const tz = getTimezone();
    const data = [];

    for (const item of journeys) {
      const datetime = moment(item.beginTime).utcOffset(tz);
      const date = datetime.format('YYYY-MM-DD');
      const time = datetime.format('HH:mm A');

      item.date = date;
      item.time = time;
      item.tz = tz;
      data.push(item);
    }

    const results = _.groupBy(data, function (object) {
      return object.date;
    });

    console.log('Data asArray : ', results);
    return results;
  } catch (e) {
    return null;
  }
};
