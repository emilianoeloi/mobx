import React, {
  Component,
  StyleSheet,
  TabBarIOS,
  View,
  Text,
} from 'react-native';
import { observer } from 'mobx-react/native';

import colors from '../MobXCore/common/colors.js';
import MobXNavigator from '../MobXNavigator';
import MobXVideoPlayer from '../MobXVideoPlayer';

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

@observer
class MobXTabView extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      selectedTab: 'green',
    });
  }
  componentWillReact() {
    console.info('componentWillReact');
  }
  _renderContent(tab: string, color: string) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{tab}-{color}</Text>
      </View>
    );
  }
  _changeTab(tab) {
    this.setState({
      selectedTab: tab,
    });
    this.props.navigationStore.changeTab(tab);
  }
  render() {
    const {
      navigationStore,
      viewStore,
    } = this.props;
    return (
      <TabBarIOS tintColor={colors.default}>
        <TabBarIOS.Item
          title="Blue"
          selected={this.state.selectedTab === 'blue'}
          onPress={() => this._changeTab('blue')}
        >
          <MobXNavigator
            navigationStore={navigationStore}
            viewStore={viewStore}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Red"
          selected={this.state.selectedTab === 'red'}
          onPress={() => this._changeTab('red')}
        >
          <MobXVidePlayer />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Green"
          selected={this.state.selectedTab === 'green'}
          onPress={() => this._changeTab('green')}
        >
          {this._renderContent('Green', colors.green)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Orange"
          selected={this.state.selectedTab === 'orange'}
          onPress={() => this._changeTab('orange')}
        >
          {this._renderContent('Orange', colors.orange)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Grey"
          selected={this.state.selectedTab === 'grey'}
          onPress={() => this._changeTab('grey')}
        >
          {this._renderContent('Grey', colors.grey)}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
MobXTabView.propTypes = {
  viewStore: React.PropTypes.object.isRequired,
  navigationStore: React.PropTypes.object.isRequired,
}

module.exports = MobXTabView;
