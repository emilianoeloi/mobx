import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';
import MobXTabView from './MobXTabView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

class MobXApp extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <MobXTabView ref={(tab) => { this.tab = tab}} />
      </View>
    );
  }
}

module.exports = MobXApp;
