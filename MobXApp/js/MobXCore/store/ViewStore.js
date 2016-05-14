import { observable } from 'mobx';
import {
  DEFAULT_URL,
  DEFAULT_TAB,
} from '../common/constants.js';

export default class ViewStore {
  @observable url = DEFAULT_URL;
  @observable tab = DEFAULT_TAB;
}
