import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import { observer } from 'mobx-react/native';

import MobXTabView from '../MobXTabView';
import MobXVideoPlayer from '../MobXVideoPlayer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

@observer
class MobXApp extends Component {
  render() {
    const {
      navigationStore,
      viewStore,
    } = this.props;
    return ( <MobXVideoPlayer /> );
    // return (
    //   <View style={[styles.container]}>
    //     <MobXTabView
    //       navigationStore={navigationStore}
    //       viewStore={viewStore}
    //       ref={(tab) => { this.tab = tab}}
    //     />
    //   </View>
    // );
  }
}
MobXApp.propTypes = {
  viewStore: React.PropTypes.object.isRequired,
  navigationStore: React.PropTypes.object.isRequired,
}

module.exports = MobXApp;
