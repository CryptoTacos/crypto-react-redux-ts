
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line:no-any
    middleware.push((createLogger as any)());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch({type: 'test'});

export default store;