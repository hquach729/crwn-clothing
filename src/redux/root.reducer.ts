import { combineReducers } from 'redux';
import { PersistConfig, persistReducer } from 'redux-persist';
// import { RootState } from './store';

// Get the local storage object, use localStore
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig: PersistConfig<RootState> = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
});

type RootState = ReturnType<typeof rootReducer>;

// Combine both state and persist local state reducer
export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
// 	user: userReducer,
// 	cart: cartReducer,
// });
