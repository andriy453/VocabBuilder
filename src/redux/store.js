import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { AuthReducer } from './Auth/AuthSlice';
import { WordReducer } from './Word/WordSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const combinedReducer = combineReducers({
  Auth: AuthReducer,
  Word:WordReducer,
});

const persistConfig = {
  key: 'Auth',
  storage,
  whitelist: 'Auth',
};

const rootReducer = (state, action) => {
  if (action.type === 'Auth/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
