import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class Tabs extends React.Component {
  render() {
    return <View style={styles.tabs}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    marginBottom: 15
  }
});
