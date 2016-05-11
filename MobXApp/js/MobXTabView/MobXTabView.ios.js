import React, {
  Component,
  StyleSheet,
  TabBarIOS,
  View,
  Text,
} from 'react-native';

import colors from '../common/colors.js';
import MobXNavigator from '../MobXNavigator';

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

class MobXTabView extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.setState({
      selectedTab: 'green',
    });
  }
  _renderContent(tab: string, color: string) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{tab}-{color}</Text>
      </View>
    );
  }
  render() {
    return (
      <TabBarIOS tintColor={colors.default}>
        <TabBarIOS.Item
          title="Blue"
          selected={this.state.selectedTab === 'blue'}
          onPress={() => {
            this.setState({
              selectedTab: 'blue',
            });
          }}
        >
          <MobXNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Red"
          selected={this.state.selectedTab === 'red'}
          onPress={() => {
            this.setState({
              selectedTab: 'red',
            });
          }}
        >
          {this._renderContent('Red', colors.red)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Green"
          selected={this.state.selectedTab === 'green'}
          onPress={() => {
            this.setState({
              selectedTab: 'green',
            });
          }}
        >
          {this._renderContent('Green', colors.green)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Orange"
          selected={this.state.selectedTab === 'orange'}
          onPress={() => {
            this.setState({
              selectedTab: 'orange',
            });
          }}
        >
          {this._renderContent('Orange', colors.orange)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Grey"
          selected={this.state.selectedTab === 'grey'}
          onPress={() => {
            this.setState({
              selectedTab: 'grey',
            });
          }}
        >
          {this._renderContent('Grey', colors.grey)}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

module.exports = MobXTabView;
