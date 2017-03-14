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

import I18n from 'react-native-i18n'
import ReactNativeI18n from 'react-native-i18n'

import EN_US from './i18n/en/strings'
import ZH_TW from './i18n/tw/strings'

I18n.fallbacks = true

I18n.translations = {
  'en': EN_US,
  'zh-Hant': ZH_TW
}

export default class reacti18n extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Locale : {ReactNativeI18n.locale}
        </Text>
        <Text>{I18n.t('welcome')}</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reacti18n', () => reacti18n);
