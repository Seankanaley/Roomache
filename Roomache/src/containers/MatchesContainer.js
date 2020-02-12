import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MatchesContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
Matches Container
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});
