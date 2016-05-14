import React, {
  Component,
  StyleSheet,
  Navigator,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { observer } from 'mobx-react/native';

import Colors from '../MobXCore/common/colors.js';
import Assets from '../MobXCore/assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navBar: {
    flex: 1,
    backgroundColor: 'rgb(51, 51, 51)',
    alignSelf: 'stretch',
  },
  skipHeader: {
    marginTop: 56,
  },
  feed: {
    flex: 1,
    backgroundColor: 'white',
  },
  leftButton: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  header: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  headerTitle: {
    margin: 5,
    color: 'white',
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  },
});

@observer
class MobXNavigator extends Component {
  constructor(props){
    super(props);
    const initialRoute = { neme: 'blue' };
    this.renderScene = this.renderScene.bind(this);

    this.navProps = {
      ...props,
      initialRoute,
      style: styles.container,
      configureScene: () => Navigator.SceneConfigs.FloatFromRight,
      renderScene: this.renderScene,
    }

    this.navigator = null;
  }
  componentWillMount() {
    this._navVarRouteMapper = {
      RightButton: () => (
        <TouchableOpacity
          onPress={{}}
          style={[styles.leftButton]}
        >
        <Image
          source={Assets.iconShare}
        />
        </TouchableOpacity>
      ),

      LeftButton: () => (
        <TouchableOpacity
          onPress={{}}
          style={[styles.leftButton]}
        >
        <Image
          source={Assets.iconBack}
        />
        </TouchableOpacity>
      ),

      Title: (route, navigator) => (
        <View style={styles.header} >
          <TouchableOpacity
            style={styles.headerTouchable}
            onPress={() => {
              if (route.name !== 'feed') {
                navigator.pop();
              }
            }}
          >
            <Text
              style={styles.headerTitle}
            >
              MobXApp
            </Text>
          </TouchableOpacity>
        </View>
      ),
    };
  }
  renderScene(route) {
    const {
      navigationStore,
      viewStore,
    } = this.props;
    console.info('_renderScene', 'route', route);
    tabView = (<Text>Default</Text>);
    if (route.name === 'blue') {
      tabView = (<Text>Blue</Text>);
    } else if (route.name === 'red') {
      tabView = (<Text>Red</Text>);
    } else if (route.name === 'green') {
      tabView = (<Text>Green</Text>);
    } else if (route.name === 'orange') {
      tabView = (<Text>Orange</Text>);
    } else if (route.name === 'grey') {
      tabView = (<Text>Grey</Text>);
    }
    return (
      <View style={[styles.skipHeader, styles.container]}>
        <Text>Navigator</Text>
        <Text>Count: {navigationStore.count}</Text>
        {tabView}
      </View>
    );
  }
  render() {
    return (
      <Navigator
        ref={(nav) => { this.navigator = nav; }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={this._navVarRouteMapper}
            style={styles.navBar}
          />
        }
        {...this.navProps}
      />
    );
  }
}
MobXNavigator.propTypes = {
  viewStore: React.PropTypes.object.isRequired,
  navigationStore: React.PropTypes.object.isRequired,
}

module.exports = MobXNavigator;
