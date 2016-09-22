/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  FormInput,
  FormLabel,
} from 'react-native-elements';

const ClickTrack = ({ clicks }) => (<Text>Clicks: {clicks}</Text>);

class xtrack extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
  }

  incrementClick() {
    this.setState({clicks: ++this.state.clicks});
  }

  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={() => console.log('changed!')}/>
        <ClickTrack clicks={this.state.clicks} />
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.incrementClick()}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

AppRegistry.registerComponent('xtrack', () => xtrack);
