import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { combineReducers } from 'redux';
import playerSlice from './Player';
import userSlice from "./Fearures"


const persistConfig = {
  key: 'root',
  storage, 
};

const rootReducer = combineReducers({
  user: userSlice,
  player: playerSlice,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
