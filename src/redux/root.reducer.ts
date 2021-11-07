import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
// import { RootState } from './store';

// Get the local storage object, use localStore
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig: PersistConfig<RootState> = {
	key: 'root',
	storage,
	whitelist: ['cart', 'directory', 'user'],
};

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
});

type RootState = ReturnType<typeof rootReducer>;

// Combine both state and persist local state reducer
export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
// 	user: userReducer,
// 	cart: cartReducer,
// });
