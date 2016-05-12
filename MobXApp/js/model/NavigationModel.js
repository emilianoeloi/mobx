import { observable } from 'mobx';

export default class NavigationModel {
  store;
  id;
  @observable url;
  @observable tab;

  constructor(store, id, url, tab) {
    this.store = store;
    this.id = id;
    this.url = url;
    this.tab = tab;
  }

  destroy() {
    this.store.scenes.remove(this);
  }

  setUrl(url){
    this.url = url;
  }

  setTab(tab){
    this.tab = tab;
  }

  toJS() {
    return {
      id: this.id,
      url: this.url,
      tab: this.tab,
    }
  }

  static fromJS(store, object) {
    return new NavigationModel(store, object.id, object.url, object.tab);
  }

}
