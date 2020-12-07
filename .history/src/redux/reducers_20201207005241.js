import {combineReducers} from 'redux';
import followReducer from '@feature/follow/modules/reducers';
import loadingReducer from '../loading/reducers';

const allReducers = combineReducers({
  followReducer,
  loading: loadingReducer,
});

export default allReducers;
