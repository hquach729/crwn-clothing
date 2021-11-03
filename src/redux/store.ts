import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root.reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof store.getState>;
export default store;

// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
