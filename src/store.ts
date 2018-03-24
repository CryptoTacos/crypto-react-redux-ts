
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootEpic } from './epics';

// tslint:disable-next-line:no-any
const epicMiddleware = createEpicMiddleware(rootEpic);

const devEnhancer = composeWithDevTools(
    applyMiddleware(thunk, epicMiddleware, createLogger())
);
const prodEnhancer = compose(
    applyMiddleware(thunk, epicMiddleware)
);

// tslint:disable-next-line:no-any
function configureStore(initialState?: any) {
    const enhancer = process.env.NODE_ENV === 'production' ? prodEnhancer : devEnhancer;
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
}

export default configureStore;
