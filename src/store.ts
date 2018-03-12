
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const devEnhancer = composeWithDevTools(
    applyMiddleware(thunk, createLogger())
);
const prodEnhancer = compose(
    applyMiddleware(thunk)
);

// tslint:disable-next-line:no-any
function configureStore(initialState?: any) {
    const enhancer = process.env.NODE_ENV === 'production' ? prodEnhancer : devEnhancer;
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}

export default configureStore;
