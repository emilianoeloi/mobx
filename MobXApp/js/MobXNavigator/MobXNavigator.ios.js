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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
  _goBack(){
    this.props.navigationStore.history(-1);
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
          onPress={() => this._goBack()}
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
        <Video source={{uri: "background"}} // Can be a URL or a local file.
          rate={1.0}                   // 0 is paused, 1 is normal.
          volume={1.0}                 // 0 is muted, 1 is normal.
          muted={false}                // Mutes the audio entirely.
          paused={false}               // Pauses playback entirely.
          resizeMode="cover"           // Fill the whole screen at aspect ratio.
          repeat={true}                // Repeat forever.
          onLoadStart={this.loadStart} // Callback when video starts to load
          onLoad={this.setDuration}    // Callback when video loads
          onProgress={this.setTime}    // Callback every ~250ms with currentTime
          onEnd={this.onEnd}           // Callback when playback finishes
          onError={this.videoError}    // Callback when video cannot be loaded
          style={styles.backgroundVideo} />

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
