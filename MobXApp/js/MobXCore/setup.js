import React, { Component } from 'react-native';

import MobXApp from './MobXApp';
import {
  version,
  author,
} from './env';
import NavigationStore from './store/NavigationStore.js';
import ViewStore from './store/ViewStore.js';

const setup = () => {
  console.disableYellowBox = true;

  class Root extends Component {
    constructor(){
      super();
      this.scenes = [];
      this.navigationStore = NavigationStore.fromJS(this.scenes);
      this.viewStore = new ViewStore();
    }
    render(){
      return  (
        <MobXApp
          navigationStore={this.navigationStore}
          viewStore={this.viewStore}
        />
      );
    }
  }
  return Root;
}

module.exports = setup;
