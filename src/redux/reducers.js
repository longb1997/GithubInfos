import { combineReducers } from 'redux';
import HomeReducer from '@feature/home/modules/reducers';
import loadingReducer from '../loading/reducers';

const allReducers = combineReducers({
  HomeReducer,
  loading: loadingReducer,
});

export default allReducers;
