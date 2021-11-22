import {
	configureStore,
	getDefaultMiddleware,
	combineReducers,
} from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contacts-reducer';
import { filterReducer } from './filter/filter-reducer';

const persistConfig = {
	key: 'contacts',
	storage,
	blacklist: ['filter'],
};

const middleware = getDefaultMiddleware({
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	},
});

const rootReducer = combineReducers({
	contacts: contactsReducer,
	filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware,
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
