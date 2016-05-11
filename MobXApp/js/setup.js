import React, { Component } from 'react-native';
import MobXApp from './MobXApp';
import {
  version,
  author,
} from './env';

const setup = () => {
  console.disableYellowBox = true;

  class Root extends Component {
    constructor(){
      super();
    }
    render(){
      return  (
        <MobXApp />
      );
    }
  }
  return Root;
}

module.exports = setup;
