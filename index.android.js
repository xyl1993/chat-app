/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import LoginComponent from './src/page/login';
import MainComponent from './src/container/main';
import NewAccount from './src/page/newAccount';
import Walkthrough from './src/page/walkthrough';

const RouteConfigs = {
  Walkthrough: {
    screen:Walkthrough,
    navigationOptions:{
      header:null,
      gesturesEnabled:false
    }
  },
  Login: {
    screen: LoginComponent,
    navigationOptions:{
      header:null,
      gesturesEnabled:false
    }
  },
  NewAccount:{
    screen: NewAccount,
    navigationOptions:{
      header:null,
      gesturesEnabled:false
    }
  },
  Main:{
    screen: MainComponent,
    navigationOptions:{
      header:null,
      gesturesEnabled:false,
    }
  }
}
const StackNavigatorConfig = {
  initialRouteName:'Main'
}
const mode = {
}
const App = StackNavigator(RouteConfigs,StackNavigatorConfig,mode);
AppRegistry.registerComponent('MyProject', () => App);
