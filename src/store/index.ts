import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage'; // AsyncStorage for react-native
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware, Store} from 'redux';
import {createLogger} from 'redux-logger';

import {whiteList} from '../config/ReduxStorage';
import RootReducer from '../ducks/RootReducer';
import RootSaga from '../ducks/RootSaga';

// Check if chrome debugger is on
declare const window: any;
const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

export default function configureStore(onComplete: (store: Store) => void) {
  // Init logger
  const logger = createLogger({
    predicate: () => isDebuggingInChrome,
    collapsed: true,
    duration: true,
    diff: true,
  });

  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // Create list of middleware
  const middlewareList = [sagaMiddleware];
  if (__DEV__) {
    // If in development mode, push logger middleware
    middlewareList.push(logger);
  }

  // Init middleware with list
  const middleware = applyMiddleware(...middlewareList);

  // Init persist config - set which reducers to save
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: whiteList,
    stateReconciler: autoMergeLevel2,
  };

  // Init redux persist reducer
  const persistedReducer = persistReducer(persistConfig, RootReducer);

  // Create store with remote dev tools
  const store = createStore(persistedReducer, middleware);

  // Set store in window
  if (isDebuggingInChrome) {
    window.store = store;
  }

  // Init store with redux persist
  persistStore(store, null, () => onComplete(store));

  // Then run the saga
  sagaMiddleware.run(RootSaga);
}
