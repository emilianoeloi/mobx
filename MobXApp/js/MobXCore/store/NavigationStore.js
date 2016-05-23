import {
  observable,
  computed,
  autorun,
} from 'mobx';
import NavigationModel from '../model/NavigationModel.js';
import * as Utils from '../common/utils.js';

export default class NavigationStore {
  @observable scenes = [];

  @computed get count() {
    return this.scenes.length;
  }

  navigate(url, tab) {
    this.scenes.push(new NavigationModel(this, Utils.uuid(), url, tab));
  }

  history(index){
    
  }

  changeTab(tab) {
    this.scenes.push(new NavigationModel(this, Utils.uuid(), null, tab));
  }

  toJS() {
    return this.scenes.map(scene => scene.toJS());
  }

  static fromJS(array) {
    const navigationStore = new NavigationStore();
    navigationStore.scenes = array.map(item => NavigationStore.fromJS(navigationStore, item));
    return navigationStore;
  }

}
