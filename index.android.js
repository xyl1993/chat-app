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
import ProfileComponent from './src/page/profile';
import Walkthrough from './src/page/walkthrough';
import MenuComponent from './src/page/menu';
import UserHomeComponent from './src/page/userHome';
import ChatComponent from './src/page/chat';
import Compose from './src/page/compose';
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
  },
  Menu:{
    screen: MenuComponent,
    navigationOptions:{
      header:null,
      gesturesEnabled:false,
    }
  },
  UserHome:{
    screen:UserHomeComponent,
    navigationOptions:{
      header:null,
      gesturesEnabled:false,
    }
  },
  Chat:{
    screen:ChatComponent,
    navigationOptions:{
      header:null,
      gesturesEnabled:false,
    }
  },
  Profile:{
    screen:ProfileComponent,
    navigationOptions:{
      header:null,
      gesturesEnabled:false,
    }
  },
  Compose:{
    screen:Compose,
    navigationOptions:{
      header:null,
      gesturesEnabled:false,
    }
  }
}
const StackNavigatorConfig = {
  initialRouteName:'Login'
}
const mode = {
}
const App = StackNavigator(RouteConfigs,StackNavigatorConfig,mode);
AppRegistry.registerComponent('MyProject', () => App);
