import {View} from 'react-native';
import {Provider} from 'react-redux';
import React, {Component} from 'react';

import {DataHandler} from './utils';
import AppNavigator from './navigator';
import configureStore from './store';
import {AppStyles} from './theme';

interface AppState {
  isLoading: boolean;
  store: any;
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    configureStore((store: any) => {
      this.initSettings(store);
      this.setState({isLoading: false, store});
    });
  }

  state: AppState = {
    isLoading: true,
    store: null,
  };

  initSettings = (store: any) => {
    DataHandler.setStore(store);
  };

  render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <View style={{flex: 1}}>
        <Provider store={this.state.store}>
          <AppNavigator initialRouteName={'Home'} />
        </Provider>
      </View>
    );
  }
}
