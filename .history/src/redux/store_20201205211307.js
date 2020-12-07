import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducers from './reducers';
import AsyncStorage from '@react-native-community/async-storage';
import KeychainStorage from 'src/config/KeychainStorage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], //Right
  blacklist: ['form', 'followReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    // },
    thunk: {
      // extraArgument: myCustomApiService
    },
    immutableCheck: false,
  }),
});

export let persistor = persistStore(store);
